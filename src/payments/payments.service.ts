import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { UpdatePaymentsDto } from "./dto/update-payment.dto";
import { PrismaService } from "../prisma/prisma.service";
import { CreatePaymentsDto } from "./dto/create-payment.dto";

@Injectable()
export class PaymentsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createPaymentDto: CreatePaymentsDto) {
    const rental = await this.prismaService.rentals.findUnique({
      where: { id: createPaymentDto.rental_id },
      include: { car: true },
    });

    if (!rental) {
      throw new BadRequestException("Ijara topilmadi");
    }

    const rentalTotalPrice = parseFloat(rental.total_price.toString());
    const paymentAmount = createPaymentDto.amount;

    if (paymentAmount < rentalTotalPrice) {
      throw new BadRequestException(
        `To'lov miqdori yetarli emas. Ijara narxi: ${rentalTotalPrice} so'm, To'lov: ${paymentAmount} so'm. Kamida ${rentalTotalPrice} so'm to'lashingiz kerak.`
      );
    }

    if (paymentAmount > rentalTotalPrice) {
    }

    return await this.prismaService.payments.create({
      data: {
        ...createPaymentDto,
        payment_date: new Date(createPaymentDto.payment_date),
        status: "PENDING",
      },
      include: { rental: true },
    });
  }

  async findAll(currentUserId?: number, userRole?: string) {
    if (userRole === "ADMIN" || userRole === "MANAGER") {
      return await this.prismaService.payments.findMany({
        include: { rental: true },
      });
    }
    return await this.prismaService.payments.findMany({
      where: { rental: { user_id: currentUserId } },
      include: { rental: true },
    });
  }

  async findOne(id: number, currentUserId?: number, userRole?: string) {
    const payment = await this.prismaService.payments.findUnique({
      where: { id },
      include: { rental: true },
    });

    if (!payment) {
      throw new NotFoundException("To'lov topilmadi");
    }

    if (userRole === "ADMIN" || userRole === "MANAGER") {
      return payment;
    }

    if (payment.rental.user_id !== currentUserId) {
      throw new BadRequestException(
        "Faqat o'z to'lovingizga kirishingiz mumkin"
      );
    }

    return payment;
  }

  async update(id: number, updatePaymentDto: UpdatePaymentsDto) {
    const existingPayment = await this.prismaService.payments.findUnique({
      where: { id },
      include: { rental: true },
    });

    if (!existingPayment) {
      throw new NotFoundException("To'lov topilmadi");
    }

    if (updatePaymentDto.amount !== undefined) {
      const rentalTotalPrice = parseFloat(
        existingPayment.rental.total_price.toString()
      );
      const newPaymentAmount = updatePaymentDto.amount;

      if (newPaymentAmount < rentalTotalPrice) {
        throw new BadRequestException(
          `To'lov miqdori yetarli emas. Ijara narxi: ${rentalTotalPrice} so'm, Yangi to'lov: ${newPaymentAmount} so'm. Kamida ${rentalTotalPrice} so'm to'lashingiz kerak.`
        );
      }

      if (newPaymentAmount > rentalTotalPrice) {
      }
    }

    const updateData: any = { ...updatePaymentDto };
    if (updatePaymentDto.payment_date) {
      updateData.payment_date = new Date(updatePaymentDto.payment_date);
    }

    return await this.prismaService.payments.update({
      where: { id },
      data: updateData,
      include: { rental: true },
    });
  }

  async remove(id: number) {
    const existingPayment = await this.prismaService.payments.findUnique({
      where: { id },
    });

    if (!existingPayment) {
      throw new NotFoundException("Tolov topilmadi");
    }

    return await this.prismaService.payments.delete({
      where: { id },
    });
  }
}
