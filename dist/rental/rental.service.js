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
exports.RentalService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let RentalService = class RentalService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createRentalDto, userId) {
        const user = await this.prismaService.user.findUnique({
            where: { id: userId },
        });
        if (!user) {
            throw new common_1.BadRequestException("Foydalanuvchi topilmadi");
        }
        const car = await this.prismaService.car.findUnique({
            where: { id: createRentalDto.car_id },
        });
        if (!car) {
            throw new common_1.BadRequestException("Avtomobil topilmadi");
        }
        if (!car.is_available) {
            throw new common_1.BadRequestException("Bu avtomobil mavjud emas");
        }
        const startDate = new Date(createRentalDto.start_date);
        const endDate = new Date(createRentalDto.end_date);
        const daysDiff = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
        if (daysDiff <= 0) {
            throw new common_1.BadRequestException("Tugash sanasi boshlanish sanasidan keyin bolishi kerak");
        }
        const carPricePerDay = parseFloat(car.price_per_day);
        const totalRequiredPrice = carPricePerDay * daysDiff;
        if (createRentalDto.total_price < totalRequiredPrice) {
            throw new common_1.BadRequestException(`Avtomobil narxi: ${carPricePerDay} so'm/kun, ${daysDiff} kun uchun: ${totalRequiredPrice} so'm. Siz ${createRentalDto.total_price} so'm tolayapsiz. Kamida ${totalRequiredPrice} som tolashingiz kerak.`);
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
    async findAll(currentUserId, userRole) {
        if (userRole === "ADMIN" || userRole === "MANAGER") {
            return await this.prismaService.rentals.findMany({
                include: { user: true, car: true },
            });
        }
        if (!currentUserId) {
            throw new common_1.BadRequestException("Foydalanuvchi malumotlari kerak");
        }
        return await this.prismaService.rentals.findMany({
            where: { user_id: currentUserId },
            include: { user: true, car: true },
        });
    }
    async findByUserId(userId) {
        return await this.prismaService.rentals.findMany({
            where: { user_id: userId },
            include: { user: true, car: true },
        });
    }
    async findOne(id, currentUserId, userRole) {
        const rental = await this.prismaService.rentals.findUnique({
            where: { id },
            include: { user: true, car: true },
        });
        if (!rental) {
            throw new common_1.NotFoundException("Ijara topilmadi");
        }
        if (userRole === "ADMIN" || userRole === "MANAGER") {
            return rental;
        }
        if (rental.user_id !== currentUserId) {
            throw new common_1.ForbiddenException("Faqat oz ijara malumotlaringizga kirishingiz mumkin");
        }
        return rental;
    }
    async update(id, updateRentalDto, userRole) {
        const existingRental = await this.prismaService.rentals.findUnique({
            where: { id },
        });
        if (!existingRental) {
            throw new common_1.NotFoundException("Ijara topilmadi");
        }
        if (userRole !== "ADMIN" && userRole !== "MANAGER") {
            throw new common_1.ForbiddenException("Faqat admin va manager yangilay oladi");
        }
        return await this.prismaService.rentals.update({
            where: { id },
            data: updateRentalDto,
            include: { user: true, car: true },
        });
    }
    async remove(id, userRole) {
        const existingRental = await this.prismaService.rentals.findUnique({
            where: { id },
        });
        if (!existingRental) {
            throw new common_1.NotFoundException("Ijara topilmadi");
        }
        if (userRole !== "ADMIN" && userRole !== "MANAGER") {
            throw new common_1.ForbiddenException("Faqat admin va manager o'chiroladi");
        }
        return await this.prismaService.rentals.delete({
            where: { id },
        });
    }
};
exports.RentalService = RentalService;
exports.RentalService = RentalService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RentalService);
//# sourceMappingURL=rental.service.js.map