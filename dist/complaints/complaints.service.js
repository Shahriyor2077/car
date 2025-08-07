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
exports.ComplaintsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ComplaintsService = class ComplaintsService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createComplaintDto, currentUserId) {
        if (currentUserId && createComplaintDto.user_id !== currentUserId) {
            throw new common_1.BadRequestException("Faqat o'z nomingizga shikoyat yarata olasiz");
        }
        const user = await this.prismaService.user.findUnique({
            where: { id: createComplaintDto.user_id }
        });
        if (!user) {
            throw new common_1.BadRequestException("Foydalanuvchi topilmadi");
        }
        return await this.prismaService.complaints.create({
            data: createComplaintDto,
            include: { user: true, rental: true }
        });
    }
    async findAll() {
        return await this.prismaService.complaints.findMany({
            include: { user: true, rental: true }
        });
    }
    async findOne(id, currentUserId, userRole) {
        const complaint = await this.prismaService.complaints.findUnique({
            where: { id },
            include: { user: true, rental: true }
        });
        if (!complaint) {
            throw new common_1.NotFoundException("Shikoyat topilmadi");
        }
        if (userRole === "ADMIN" || userRole === "MANAGER") {
            return complaint;
        }
        if (complaint.user_id !== currentUserId) {
            throw new common_1.BadRequestException("Faqat o'z shikoyatingizga kirishingiz mumkin");
        }
        return complaint;
    }
    async update(id, updateComplaintDto) {
        const existingComplaint = await this.prismaService.complaints.findUnique({
            where: { id }
        });
        if (!existingComplaint) {
            throw new common_1.NotFoundException("Shikoyat topilmadi");
        }
        return await this.prismaService.complaints.update({
            where: { id },
            data: updateComplaintDto,
            include: { user: true, rental: true }
        });
    }
    async remove(id) {
        const existingComplaint = await this.prismaService.complaints.findUnique({
            where: { id }
        });
        if (!existingComplaint) {
            throw new common_1.NotFoundException("Shikoyat topilmadi");
        }
        return await this.prismaService.complaints.delete({
            where: { id }
        });
    }
};
exports.ComplaintsService = ComplaintsService;
exports.ComplaintsService = ComplaintsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ComplaintsService);
//# sourceMappingURL=complaints.service.js.map