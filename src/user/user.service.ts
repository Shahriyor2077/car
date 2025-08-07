import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { UpdateUserDto } from "./dto/update-user.dto";
import { PrismaService } from "../prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.prismaService.user.findUnique({
      where: { email: createUserDto.email },
    });

    if (existingUser) {
      throw new BadRequestException("Bu email allaqachon mavjud");
    }

    return await this.prismaService.user.create({
      data: createUserDto,
    });
  }

  async findAll() {
    return await this.prismaService.user.findMany();
  }

  async findOne(id: number) {
    const user = await this.prismaService.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException("Foydalanuvchi topilmadi");
    }

    return user;
  }

  async findByEmail(email: string) {
    const user = await this.prismaService.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new NotFoundException("Foydalanuvchi topilmadi");
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const existingUser = await this.prismaService.user.findUnique({
      where: { id },
    });

    if (!existingUser) {
      throw new NotFoundException("Foydalanuvchi topilmadi");
    }

    return await this.prismaService.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    const existingUser = await this.prismaService.user.findUnique({
      where: { id },
    });

    if (!existingUser) {
      throw new NotFoundException("Foydalanuvchi topilmadi");
    }

    await this.prismaService.damages.deleteMany({
      where: { rental: { user_id: id } },
    });

    await this.prismaService.payments.deleteMany({
      where: { rental: { user_id: id } },
    });

    await this.prismaService.complaints.deleteMany({
      where: { user_id: id },
    });
    await this.prismaService.rentals.deleteMany({
      where: { user_id: id },
    });

    await this.prismaService.reviews.deleteMany({
      where: { user_id: id },
    });

    await this.prismaService.documents.deleteMany({
      where: { user_id: id },
    });

    await this.prismaService.notifications.deleteMany({
      where: { user_id: id },
    });
    return await this.prismaService.user.delete({
      where: { id },
    });
  }
}
