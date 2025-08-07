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
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let NotificationService = class NotificationService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createNotificationDto) {
        const user = await this.prismaService.user.findUnique({
            where: { id: createNotificationDto.user_id },
        });
        if (!user) {
            throw new common_1.BadRequestException("Foydalanuvchi topilmadi");
        }
        return await this.prismaService.notifications.create({
            data: createNotificationDto,
            include: { user: true },
        });
    }
    async findAll(currentUserId, userRole) {
        if (userRole === "ADMIN" || userRole === "MANAGER") {
            return await this.prismaService.notifications.findMany({
                include: { user: true },
            });
        }
        return await this.prismaService.notifications.findMany({
            where: { user_id: currentUserId },
            include: { user: true },
        });
    }
    async findOne(id, currentUserId, userRole) {
        const notification = await this.prismaService.notifications.findUnique({
            where: { id },
            include: { user: true },
        });
        if (!notification) {
            throw new common_1.NotFoundException("Bildirishnoma topilmadi");
        }
        if (userRole === "ADMIN" || userRole === "MANAGER") {
            return notification;
        }
        if (notification.user_id !== currentUserId) {
            throw new common_1.BadRequestException("Faqat oz bildirishnomaingizga kirishingiz mumkin");
        }
        return notification;
    }
    async update(id, updateNotificationDto) {
        const existingNotification = await this.prismaService.notifications.findUnique({
            where: { id },
        });
        if (!existingNotification) {
            throw new common_1.NotFoundException("Bildirishnoma topilmadi");
        }
        return await this.prismaService.notifications.update({
            where: { id },
            data: updateNotificationDto,
            include: { user: true },
        });
    }
    async remove(id) {
        const existingNotification = await this.prismaService.notifications.findUnique({
            where: { id },
        });
        if (!existingNotification) {
            throw new common_1.NotFoundException("Bildirishnoma topilmadi");
        }
        return await this.prismaService.notifications.delete({
            where: { id },
        });
    }
};
exports.NotificationService = NotificationService;
exports.NotificationService = NotificationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NotificationService);
//# sourceMappingURL=notification.service.js.map