import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { CreateCarMaintenanceDto } from "./dto/create-car_maintenance.dto";
import { UpdateCarMaintenanceDto } from "./dto/update-car_maintenance.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class CarMaintenanceService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createCarMaintenanceDto: CreateCarMaintenanceDto) {
    const car = await this.prismaService.car.findUnique({
      where: { id: createCarMaintenanceDto.car_id },
    });

    if (!car) {
      throw new BadRequestException("Avtomobil topilmadi");
    }

    return await this.prismaService.car_maintenance.create({
      data: createCarMaintenanceDto,
    });
  }

  async findAll() {
    return await this.prismaService.car_maintenance.findMany({
      include: { car: true },
    });
  }

  async findOne(id: number) {
    const maintenance = await this.prismaService.car_maintenance.findUnique({
      where: { id },
      include: { car: true },
    });

    if (!maintenance) {
      throw new NotFoundException("Texnik xizmat topilmadi");
    }

    return maintenance;
  }

  async update(id: number, updateCarMaintenanceDto: UpdateCarMaintenanceDto) {
    const existingMaintenance =
      await this.prismaService.car_maintenance.findUnique({
        where: { id },
      });

    if (!existingMaintenance) {
      throw new NotFoundException("Texnik xizmat topilmadi");
    }

    if (updateCarMaintenanceDto.car_id) {
      const car = await this.prismaService.car.findUnique({
        where: { id: updateCarMaintenanceDto.car_id },
      });

      if (!car) {
        throw new BadRequestException("Avtomobil topilmadi");
      }
    }

    return await this.prismaService.car_maintenance.update({
      where: { id },
      data: updateCarMaintenanceDto,
    });
  }

  async remove(id: number) {
    const existingMaintenance =
      await this.prismaService.car_maintenance.findUnique({
        where: { id },
      });

    if (!existingMaintenance) {
      throw new NotFoundException("Texnik xizmat topilmadi");
    }

    return await this.prismaService.car_maintenance.delete({
      where: { id },
    });
  }
}
