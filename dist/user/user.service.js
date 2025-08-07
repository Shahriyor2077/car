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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UserService = class UserService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createUserDto) {
        const existingUser = await this.prismaService.user.findUnique({
            where: { email: createUserDto.email },
        });
        if (existingUser) {
            throw new common_1.BadRequestException("Bu email allaqachon mavjud");
        }
        return await this.prismaService.user.create({
            data: createUserDto,
        });
    }
    async findAll() {
        return await this.prismaService.user.findMany();
    }
    async findOne(id) {
        const user = await this.prismaService.user.findUnique({
            where: { id },
        });
        if (!user) {
            throw new common_1.NotFoundException("Foydalanuvchi topilmadi");
        }
        return user;
    }
    async findByEmail(email) {
        const user = await this.prismaService.user.findUnique({
            where: { email },
        });
        if (!user) {
            throw new common_1.NotFoundException("Foydalanuvchi topilmadi");
        }
        return user;
    }
    async update(id, updateUserDto) {
        const existingUser = await this.prismaService.user.findUnique({
            where: { id },
        });
        if (!existingUser) {
            throw new common_1.NotFoundException("Foydalanuvchi topilmadi");
        }
        return await this.prismaService.user.update({
            where: { id },
            data: updateUserDto,
        });
    }
    async remove(id) {
        const existingUser = await this.prismaService.user.findUnique({
            where: { id },
        });
        if (!existingUser) {
            throw new common_1.NotFoundException("Foydalanuvchi topilmadi");
        }
        await this.prismaService.damages.deleteMany({
            where: { rental: { user_id: id } },
        });
        await this.prismaService.payments.deleteMany({
            where: { rental: { user_id: id } },
        });
        await this.prismaService.complaints.deleteMany({
            where: { user_id: id },
        });
        await this.prismaService.rentals.deleteMany({
            where: { user_id: id },
        });
        await this.prismaService.reviews.deleteMany({
            where: { user_id: id },
        });
        await this.prismaService.documents.deleteMany({
            where: { user_id: id },
        });
        await this.prismaService.notifications.deleteMany({
            where: { user_id: id },
        });
        return await this.prismaService.user.delete({
            where: { id },
        });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map