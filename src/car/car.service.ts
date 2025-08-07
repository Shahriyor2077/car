import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";

import { PrismaService } from "../prisma/prisma.service";
import { CreateCarDto } from "./dto/create-car.dto";
import { UpdateCarDto } from "./dto/update-car.dto";

@Injectable()
export class CarService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createCarDto: CreateCarDto) {
    const car = await this.prismaService.car.create({
      data: createCarDto,
      include: { branch: true },
    });

    return {
      message: "Avtomobil muvaffaqiyatli yaratildi",
      car: car,
    };
  }

  async findAll() {
    return await this.prismaService.car.findMany({
      include: { branch: true },
    });
  }

  async findByColor(color: string) {
    return await this.prismaService.car.findMany({
      where: { color: { contains: color } },
      include: { branch: true, car_images: true },
    });
  }

  async findByYear(year: string) {
    return await this.prismaService.car.findMany({
      where: { year },
      include: { branch: true, car_images: true },
      orderBy: { year: "desc" },
    });
  }

  async findByPrice(minPrice?: number, maxPrice?: number) {
    const where: any = {};

    if (minPrice || maxPrice) {
      where.price_per_day = {};
      if (minPrice) where.price_per_day.gte = minPrice.toString();
      if (maxPrice) where.price_per_day.lte = maxPrice.toString();
    }

    return await this.prismaService.car.findMany({
      where,
      include: { branch: true, car_images: true },
      orderBy: { price_per_day: "asc" },
    });
  }

  async findByRating(minRating?: number, maxRating?: number) {
    const where: any = {};
    if (minRating || maxRating) {
      where.reviews = { some: { rating: {} } };
      if (minRating) where.reviews.some.rating.gte = minRating.toString();
      if (maxRating) where.reviews.some.rating.lte = maxRating.toString();
    }
    return await this.prismaService.car.findMany({
      where,
      include: {
        branch: true,
        car_images: true,
        reviews: { include: { user: true } },
      },
      orderBy: { reviews: { _count: "desc" } },
    });
  }

  async findOne(id: number) {
    const car = await this.prismaService.car.findUnique({
      where: { id },
      include: { branch: true },
    });

    if (!car) {
      throw new NotFoundException("Avtomobil topilmadi");
    }

    return car;
  }

  async update(id: number, updateCarDto: UpdateCarDto) {
    const existingCar = await this.prismaService.car.findUnique({
      where: { id },
    });

    if (!existingCar) {
      throw new NotFoundException("Avtomobil topilmadi");
    }

    return await this.prismaService.car.update({
      where: { id },
      data: updateCarDto,
    });
  }

  async remove(id: number) {
    const existingCar = await this.prismaService.car.findUnique({
      where: { id },
    });

    if (!existingCar) {
      throw new NotFoundException("Avtomobil topilmadi");
    }
    await this.prismaService.car_images.deleteMany({
      where: { car_id: id },
    });

    await this.prismaService.car_feature.deleteMany({
      where: { car_id: id },
    });

    await this.prismaService.car_maintenance.deleteMany({
      where: { car_id: id },
    });

    await this.prismaService.reviews.deleteMany({
      where: { car_id: id },
    });

    await this.prismaService.damages.deleteMany({
      where: { rental: { car_id: id } },
    });

    await this.prismaService.payments.deleteMany({
      where: { rental: { car_id: id } },
    });

    await this.prismaService.complaints.deleteMany({
      where: { rental: { car_id: id } },
    });

    await this.prismaService.rentals.deleteMany({
      where: { car_id: id },
    });
    return await this.prismaService.car.delete({
      where: { id },
    });
  };
}
