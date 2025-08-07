import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { CreateCarFeatureDto } from "./dto/create-car_feature.dto";
import { UpdateCarFeatureDto } from "./dto/update-car_feature.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class CarFeatureService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createCarFeatureDto: CreateCarFeatureDto) {
    const car = await this.prismaService.car.findUnique({
      where: { id: createCarFeatureDto.car_id },
    });

    if (!car) {
      throw new BadRequestException("Avtomobil topilmadi");
    }

    const feature = await this.prismaService.feature.findUnique({
      where: { id: createCarFeatureDto.feature_id },
    });

    if (!feature) {
      throw new BadRequestException("Xususiyat topilmadi");
    }

    return await this.prismaService.car_feature.create({
      data: createCarFeatureDto,
    });
  }

  async findAll() {
    return await this.prismaService.car_feature.findMany({
      include: {
        car: true,
        feature: true,
      },
    });
  }

  async findOne(id: number) {
    const carFeature = await this.prismaService.car_feature.findUnique({
      where: { id },
      include: {
        car: true,
        feature: true,
      },
    });

    if (!carFeature) {
      throw new NotFoundException("Car xususiyat topilmadi");
    }

    return carFeature;
  }

  async update(id: number, updateCarFeatureDto: UpdateCarFeatureDto) {
    const existingCarFeature = await this.prismaService.car_feature.findUnique({
      where: { id },
    });

    if (!existingCarFeature) {
      throw new NotFoundException("Car xususiyat topilmadi");
    }

    if (updateCarFeatureDto.car_id) {
      const car = await this.prismaService.car.findUnique({
        where: { id: updateCarFeatureDto.car_id },
      });

      if (!car) {
        throw new BadRequestException("Avtomobil topilmadi");
      }
    }

    if (updateCarFeatureDto.feature_id) {
      const feature = await this.prismaService.feature.findUnique({
        where: { id: updateCarFeatureDto.feature_id },
      });

      if (!feature) {
        throw new BadRequestException("Xususiyat topilmadi");
      }
    }

    return await this.prismaService.car_feature.update({
      where: { id },
      data: updateCarFeatureDto,
    });
  }

  async remove(id: number) {
    const existingCarFeature = await this.prismaService.car_feature.findUnique({
      where: { id },
    });

    if (!existingCarFeature) {
      throw new NotFoundException("Car xususiyat topilmadi");
    }

    return await this.prismaService.car_feature.delete({
      where: { id },
    });
  }
}
