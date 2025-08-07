"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PaymentsService = class PaymentsService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createPaymentDto) {
        const rental = await this.prismaService.rentals.findUnique({
            where: { id: createPaymentDto.rental_id },
            include: { car: true },
        });
        if (!rental) {
            throw new common_1.BadRequestException("Ijara topilmadi");
        }
        const rentalTotalPrice = parseFloat(rental.total_price.toString());
        const paymentAmount = createPaymentDto.amount;
        if (paymentAmount < rentalTotalPrice) {
            throw new common_1.BadRequestException(`To'lov miqdori yetarli emas. Ijara narxi: ${rentalTotalPrice} so'm, To'lov: ${paymentAmount} so'm. Kamida ${rentalTotalPrice} so'm to'lashingiz kerak.`);
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
    async findAll(currentUserId, userRole) {
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
    async findOne(id, currentUserId, userRole) {
        const payment = await this.prismaService.payments.findUnique({
            where: { id },
            include: { rental: true },
        });
        if (!payment) {
            throw new common_1.NotFoundException("To'lov topilmadi");
        }
        if (userRole === "ADMIN" || userRole === "MANAGER") {
            return payment;
        }
        if (payment.rental.user_id !== currentUserId) {
            throw new common_1.BadRequestException("Faqat o'z to'lovingizga kirishingiz mumkin");
        }
        return payment;
    }
    async update(id, updatePaymentDto) {
        const existingPayment = await this.prismaService.payments.findUnique({
            where: { id },
            include: { rental: true },
        });
        if (!existingPayment) {
            throw new common_1.NotFoundException("To'lov topilmadi");
        }
        if (updatePaymentDto.amount !== undefined) {
            const rentalTotalPrice = parseFloat(existingPayment.rental.total_price.toString());
            const newPaymentAmount = updatePaymentDto.amount;
            if (newPaymentAmount < rentalTotalPrice) {
                throw new common_1.BadRequestException(`To'lov miqdori yetarli emas. Ijara narxi: ${rentalTotalPrice} so'm, Yangi to'lov: ${newPaymentAmount} so'm. Kamida ${rentalTotalPrice} so'm to'lashingiz kerak.`);
            }
            if (newPaymentAmount > rentalTotalPrice) {
            }
        }
        const updateData = { ...updatePaymentDto };
        if (updatePaymentDto.payment_date) {
            updateData.payment_date = new Date(updatePaymentDto.payment_date);
        }
        return await this.prismaService.payments.update({
            where: { id },
            data: updateData,
            include: { rental: true },
        });
    }
    async remove(id) {
        const existingPayment = await this.prismaService.payments.findUnique({
            where: { id },
        });
        if (!existingPayment) {
            throw new common_1.NotFoundException("Tolov topilmadi");
        }
        return await this.prismaService.payments.delete({
            where: { id },
        });
    }
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PaymentsService);
//# sourceMappingURL=payments.service.js.map