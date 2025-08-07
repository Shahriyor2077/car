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
exports.ReviewsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ReviewsService = class ReviewsService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createReviewDto, currentUserId) {
        if (currentUserId) {
            createReviewDto.user_id = currentUserId;
        }
        const user = await this.prismaService.user.findUnique({
            where: { id: createReviewDto.user_id },
        });
        if (!user) {
            throw new common_1.BadRequestException("Foydalanuvchi topilmadi");
        }
        const car = await this.prismaService.car.findUnique({
            where: { id: createReviewDto.car_id },
        });
        if (!car) {
            throw new common_1.BadRequestException("Avtomobil topilmadi");
        }
        const { user_id, ...reviewData } = createReviewDto;
        if (!currentUserId) {
            throw new common_1.BadRequestException("Foydalanuvchi ID topilmadi");
        }
        return await this.prismaService.reviews.create({
            data: {
                ...reviewData,
                user_id: currentUserId,
            },
            include: { user: true, car: true },
        });
    }
    async findAll() {
        return await this.prismaService.reviews.findMany({
            include: { user: true, car: true },
        });
    }
    async findOne(id, currentUserId, userRole) {
        const review = await this.prismaService.reviews.findUnique({
            where: { id },
            include: { user: true, car: true },
        });
        if (!review) {
            throw new common_1.NotFoundException("Sharh topilmadi");
        }
        if (userRole === "ADMIN" || userRole === "MANAGER") {
            return review;
        }
        if (review.user_id !== currentUserId) {
            throw new common_1.BadRequestException("Faqat o'z sharhingizga kirishingiz mumkin");
        }
        return review;
    }
    async update(id, updateReviewDto) {
        const existingReview = await this.prismaService.reviews.findUnique({
            where: { id },
        });
        if (!existingReview) {
            throw new common_1.NotFoundException("Sharh topilmadi");
        }
        return await this.prismaService.reviews.update({
            where: { id },
            data: updateReviewDto,
            include: { user: true, car: true },
        });
    }
    async remove(id) {
        const existingReview = await this.prismaService.reviews.findUnique({
            where: { id },
        });
        if (!existingReview) {
            throw new common_1.NotFoundException("Sharh topilmadi");
        }
        return await this.prismaService.reviews.delete({
            where: { id },
        });
    }
};
exports.ReviewsService = ReviewsService;
exports.ReviewsService = ReviewsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReviewsService);
//# sourceMappingURL=reviews.service.js.map