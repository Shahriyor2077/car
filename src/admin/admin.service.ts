
import { Injectable, NotFoundException, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}
  private generateTokens(payload: any) {
    const accessToken = this.jwtService.sign(payload, { expiresIn: '3d' });
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });
    return { accessToken, refreshToken };
  }


  async create(createAdminDto: CreateAdminDto, currentAdminRole: string) {
    if (currentAdminRole !== 'MANAGER') {
      throw new ForbiddenException('Faqat manager admin qo\'sha oladi');
    }

    const adminExists = await this.prisma.admin.findUnique({ 
      where: { email: createAdminDto.email } 
    });
    if (adminExists) {
      throw new ForbiddenException('Bu email allaqachon ro\'yxatdan o\'tgan');
    }

    const hashedPassword = await bcrypt.hash(createAdminDto.password, 10);
    const admin = await this.prisma.admin.create({
      data: {
        full_name: createAdminDto.full_name,
        email: createAdminDto.email,
        password: hashedPassword,
        role: createAdminDto.role,
      },
    });

    return {
      message: 'Admin muvaffaqiyatli yaratildi',
      admin,
    };
  }


  async login(email: string, password: string) {
    const admin = await this.prisma.admin.findUnique({ where: { email } });
    if (!admin) {
      throw new UnauthorizedException('Email yoki parol noto\'g\'ri');
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      throw new UnauthorizedException('Email yoki parol noto\'g\'ri');
    }

    const payload = { 
      sub: admin.id, 
      email: admin.email, 
      role: admin.role || 'ADMIN' 
    };
    return this.generateTokens(payload);
  }

  // Admin logout
  async logout() {
    return { message: 'Logout muvaffaqiyatli' };
  }


  async refreshToken(oldRefreshToken: string) {
    if (!oldRefreshToken) {
      throw new UnauthorizedException('Refresh token topilmadi');
    }

    let payload: any;
    try {
      payload = this.jwtService.verify(oldRefreshToken);
    } catch (error) {
      throw new UnauthorizedException("Refresh token noto'g'ri yoki eskirgan");
    }

    const admin = await this.prisma.admin.findUnique({ where: { id: payload.sub } });
    if (!admin) {
      throw new UnauthorizedException('Admin topilmadi');
    }

    const newPayload = { sub: admin.id, email: admin.email, role: admin.role };
    return this.generateTokens(newPayload);
  }

  findAll() {
    return this.prisma.admin.findMany();
  }

  findOne(id: number) {
    return this.prisma.admin.findUnique({ where: { id } });
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    const existing = await this.prisma.admin.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('Admin not found');

    return this.prisma.admin.update({
      where: { id },
      data: updateAdminDto,
    });
  }

  async remove(id: number) {
    const existing = await this.prisma.admin.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('Admin not found');

    return this.prisma.admin.delete({ where: { id } });
  }
}
