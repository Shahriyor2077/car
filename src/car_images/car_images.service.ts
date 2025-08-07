import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { CreateCarImagesDto } from "./dto/create-car_image.dto";
import { UpdateCarImagesDto } from "./dto/update-car_image.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class CarImagesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createCarImageDto: CreateCarImagesDto) {
    const car = await this.prismaService.car.findUnique({
      where: { id: createCarImageDto.car_id },
    });

    if (!car) {
      throw new BadRequestException("Avtomobil topilmadi");
    }

    return await this.prismaService.car_images.create({
      data: createCarImageDto,
    });
  }

  async findAll() {
    return await this.prismaService.car_images.findMany({
      include: { car: true },
    });
  }

  async findOne(id: number) {
    const carImage = await this.prismaService.car_images.findUnique({
      where: { id },
      include: { car: true },
    });

    if (!carImage) {
      throw new NotFoundException("Car rasm topilmadi");
    }

    return carImage;
  }

  async update(id: number, updateCarImageDto: UpdateCarImagesDto) {
    const existingCarImage = await this.prismaService.car_images.findUnique({
      where: { id },
    });

    if (!existingCarImage) {
      throw new NotFoundException("Car rasm topilmadi");
    }

    if (updateCarImageDto.car_id) {
      const car = await this.prismaService.car.findUnique({
        where: { id: updateCarImageDto.car_id },
      });

      if (!car) {
        throw new BadRequestException("Avtomobil topilmadi");
      }
    }

    return await this.prismaService.car_images.update({
      where: { id },
      data: updateCarImageDto,
    });
  }

  async remove(id: number) {
    const existingCarImage = await this.prismaService.car_images.findUnique({
      where: { id },
    });

    if (!existingCarImage) {
      throw new NotFoundException("Car rasm topilmadi");
    }

    return await this.prismaService.car_images.delete({
      where: { id },
    });
  }
}
