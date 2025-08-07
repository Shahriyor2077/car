import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { CreateDamagesDto } from "./dto/create-damage.dto";
import { UpdateDamagesDto } from "./dto/update-damage.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class DamageService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createDamageDto: CreateDamagesDto) {
    const rental = await this.prismaService.rentals.findUnique({
      where: { id: createDamageDto.rental_id },
    });

    if (!rental) {
      throw new BadRequestException("Ijara topilmadi");
    }

    return await this.prismaService.damages.create({
      data: {
        ...createDamageDto,
        damage_date: new Date(createDamageDto.damage_date),
      },
      include: { rental: true },
    });
  }

  async findAll() {
    return await this.prismaService.damages.findMany({
      include: { rental: true },
    });
  }

  async findOne(id: number) {
    const damage = await this.prismaService.damages.findUnique({
      where: { id },
      include: { rental: true },
    });

    if (!damage) {
      throw new NotFoundException("Zarar topilmadi");
    }

    return damage;
  }

  async update(id: number, updateDamageDto: UpdateDamagesDto) {
    const existingDamage = await this.prismaService.damages.findUnique({
      where: { id },
    });

    if (!existingDamage) {
      throw new NotFoundException("Zarar topilmadi");
    }

    const updateData: any = { ...updateDamageDto };
    if (updateDamageDto.damage_date) {
      updateData.damage_date = new Date(updateDamageDto.damage_date);
    }

    return await this.prismaService.damages.update({
      where: { id },
      data: updateData,
      include: { rental: true },
    });
  }

  async remove(id: number) {
    const existingDamage = await this.prismaService.damages.findUnique({
      where: { id },
    });

    if (!existingDamage) {
      throw new NotFoundException("Zarar topilmadi");
    }

    return await this.prismaService.damages.delete({
      where: { id },
    });
  }
}
