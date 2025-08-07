import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { CreateFeatureDto } from "./dto/create-feature.dto";
import { UpdateFeatureDto } from "./dto/update-feature.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class FeatureService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createFeatureDto: CreateFeatureDto) {
    return await this.prismaService.feature.create({
      data: createFeatureDto,
    });
  }

  async findAll() {
    return await this.prismaService.feature.findMany();
  }

  async findOne(id: number) {
    const feature = await this.prismaService.feature.findUnique({
      where: { id },
    });

    if (!feature) {
      throw new NotFoundException("Xususiyat topilmadi");
    }

    return feature;
  }

  async update(id: number, updateFeatureDto: UpdateFeatureDto) {
    const existingFeature = await this.prismaService.feature.findUnique({
      where: { id },
    });

    if (!existingFeature) {
      throw new NotFoundException("Xususiyat topilmadi");
    }

    return await this.prismaService.feature.update({
      where: { id },
      data: updateFeatureDto,
    });
  }

  async remove(id: number) {
    const existingFeature = await this.prismaService.feature.findUnique({
      where: { id },
      include: { car_feature: true },
    });

    if (!existingFeature) {
      throw new NotFoundException("Xususiyat topilmadi");
    }

    if (existingFeature.car_feature.length > 0) {
      throw new BadRequestException(
        "Bu xususiyat carlarda ishlatilgan. Ochirish mumkin emas"
      );
    }

    return await this.prismaService.feature.delete({
      where: { id },
    });
  }
}
