import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
  ForbiddenException,
} from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { PrismaService } from "../prisma/prisma.service";
import { JwtService } from "@nestjs/jwt";
import { MailService } from "../mail/mail.service";
import { v4 as uuidv4 } from "uuid";
import { CreateUserDto } from "../user/dto/create-user.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly mailService: MailService
  ) {}

  private generateTokens(payload: any) {
    const accessToken = this.jwtService.sign(payload, { expiresIn: "3d" });
    const refreshToken = this.jwtService.sign(payload, { expiresIn: "7d" });
    return { accessToken, refreshToken };
  }

  async register(dto: CreateUserDto) {
    const userExists = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (userExists) {
      throw new ForbiddenException("Bu email allaqachon ro'yxatdan o'tgan");
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const activation_link = uuidv4();

    const user = await this.prisma.user.create({
      data: {
        ...dto,
        password: hashedPassword,
        activation_link,
        is_active: false,
      },
    });

    try {
      await this.mailService.sendMail(
        {
          email: user.email,
          name: user.full_name,
          activation_link: activation_link,
        },
        "user"
      );
    } catch (error) {
      console.log("Mail yuborishda xatolik:", error.message);
    }

    const { password, ...userWithoutPassword } = user;

    return {
      message:
        "Foydalanuvchi muvaffaqiyatli yaratildi. Emailingizni tasdiqlang.",
      user: userWithoutPassword,
    };
  }

  async activate(link: string) {
    const user = await this.prisma.user.findFirst({
      where: { activation_link: link },
    });
    if (!user)
      throw new NotFoundException("Activation link notogri yoki eskirgan");

    if (user.is_active) {
      return { message: "Email allaqachon tasdiqlangan!" };
    }

    await this.prisma.user.update({
      where: { id: user.id },
      data: { is_active: true, activation_link: null },
    });

    return { message: "Email muvaffaqiyatli tasdiqlandi!" };
  }

  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new UnauthorizedException("Email yoki parol notogri");
    }
    if (!user.is_active) {
      throw new ForbiddenException("Email tasdiqlanmagan!");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException("Email yoki parol notogri");
    }

    const payload = {
      sub: user.id,
      email: user.email,
      role: "USER",
    };
    return this.generateTokens(payload);
  }

  async logout() {
    return {
      message: "Logout muvaffaqiyatli",
      success: true,
    };
  }

  async refreshToken(oldRefreshToken: string) {
    if (!oldRefreshToken) {
      throw new UnauthorizedException("Refresh token topilmadi");
    }

    let payload: any;
    try {
      payload = this.jwtService.verify(oldRefreshToken);
    } catch (error) {
      throw new UnauthorizedException("Refresh token notogri yoki eskirgan");
    }

    const user = await this.prisma.user.findUnique({
      where: { id: payload.sub },
    });
    if (!user) {
      throw new UnauthorizedException("Foydalanuvchi topilmadi");
    }

    const newPayload = { sub: user.id, email: user.email };
    return this.generateTokens(newPayload);
  }
}
