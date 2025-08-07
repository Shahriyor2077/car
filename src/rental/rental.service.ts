import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ForbiddenException,
} from "@nestjs/common";
import { CreateRentalsDto } from "./dto/create-rental.dto";
import { PrismaService } from "../prisma/prisma.service";
import { UpdateRentalsDto } from "./dto/update-rental.dto";

@Injectable()
export class RentalService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createRentalDto: CreateRentalsDto, userId: number) {
    const user = await this.prismaService.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new BadRequestException("Foydalanuvchi topilmadi");
    }

    const car = await this.prismaService.car.findUnique({
      where: { id: createRentalDto.car_id },
    });

    if (!car) {
      throw new BadRequestException("Avtomobil topilmadi");
    }

    if (!car.is_available) {
      throw new BadRequestException("Bu avtomobil mavjud emas");
    }

    const startDate = new Date(createRentalDto.start_date);
    const endDate = new Date(createRentalDto.end_date);
    const daysDiff = Math.ceil(
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (daysDiff <= 0) {
      throw new BadRequestException(
        "Tugash sanasi boshlanish sanasidan keyin bolishi kerak"
      );
    }

    const carPricePerDay = parseFloat(car.price_per_day);
    const totalRequiredPrice = carPricePerDay * daysDiff;

    if (createRentalDto.total_price < totalRequiredPrice) {
      throw new BadRequestException(
        `Avtomobil narxi: ${carPricePerDay} so'm/kun, ${daysDiff} kun uchun: ${totalRequiredPrice} so'm. Siz ${createRentalDto.total_price} so'm tolayapsiz. Kamida ${totalRequiredPrice} som tolashingiz kerak.`
      );
    }

    const rental = await this.prismaService.rentals.create({
      data: {
        ...createRentalDto,
        user_id: userId,
      },
      include: { user: true, car: true },
    });

    await this.prismaService.car.update({
      where: { id: createRentalDto.car_id },
      data: { is_available: false },
    });

    return rental;
  }

  async findAll(currentUserId?: number, userRole?: string) {
    if (userRole === "ADMIN" || userRole === "MANAGER") {
      return await this.prismaService.rentals.findMany({
        include: { user: true, car: true },
      });
    }

    if (!currentUserId) {
      throw new BadRequestException("Foydalanuvchi malumotlari kerak");
    }

    return await this.prismaService.rentals.findMany({
      where: { user_id: currentUserId },
      include: { user: true, car: true },
    });
  }

  async findByUserId(userId: number) {
    return await this.prismaService.rentals.findMany({
      where: { user_id: userId },
      include: { user: true, car: true },
    });
  }

  async findOne(id: number, currentUserId?: number, userRole?: string) {
    const rental = await this.prismaService.rentals.findUnique({
      where: { id },
      include: { user: true, car: true },
    });

    if (!rental) {
      throw new NotFoundException("Ijara topilmadi");
    }

    if (userRole === "ADMIN" || userRole === "MANAGER") {
      return rental;
    }

    if (rental.user_id !== currentUserId) {
      throw new ForbiddenException(
        "Faqat oz ijara malumotlaringizga kirishingiz mumkin"
      );
    }

    return rental;
  }

  async update(
    id: number,
    updateRentalDto: UpdateRentalsDto,
    userRole?: string
  ) {
    const existingRental = await this.prismaService.rentals.findUnique({
      where: { id },
    });

    if (!existingRental) {
      throw new NotFoundException("Ijara topilmadi");
    }

    if (userRole !== "ADMIN" && userRole !== "MANAGER") {
      throw new ForbiddenException("Faqat admin va manager yangilay oladi");
    }

    return await this.prismaService.rentals.update({
      where: { id },
      data: updateRentalDto,
      include: { user: true, car: true },
    });
  }

  async remove(id: number, userRole?: string) {
    const existingRental = await this.prismaService.rentals.findUnique({
      where: { id },
    });

    if (!existingRental) {
      throw new NotFoundException("Ijara topilmadi");
    }
    if (userRole !== "ADMIN" && userRole !== "MANAGER") {
      throw new ForbiddenException("Faqat admin va manager o'chiroladi");
    }

    return await this.prismaService.rentals.delete({
      where: { id },
    });
  }
}
