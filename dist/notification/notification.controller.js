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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/common/guards/jwt-auth.guard");
const admin_auth_guard_1 = require("../auth/common/guards/admin-auth.guard");
const notification_service_1 = require("./notification.service");
const create_notification_dto_1 = require("./dto/create-notification.dto");
const update_notification_dto_1 = require("./dto/update-notification.dto");
let NotificationController = class NotificationController {
    notificationService;
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    create(createNotificationDto) {
        return this.notificationService.create(createNotificationDto);
    }
    findOne(id, req) {
        return this.notificationService.findOne(+id, req.user.sub, req.user.role);
    }
    update(id, updateNotificationDto) {
        return this.notificationService.update(+id, updateNotificationDto);
    }
    remove(id) {
        return this.notificationService.remove(+id);
    }
    findAll(req) {
        return this.notificationService.findAll(req.user.sub, req.user.role);
    }
};
exports.NotificationController = NotificationController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Bildirishnoma yaratish" }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: "Bildirishnoma muvaffaqiyatli yaratildi",
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: "Noto'g'ri ma'lumotlar" }),
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_notification_dto_1.CreateNotificationsDto]),
    __metadata("design:returntype", void 0)
], NotificationController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Bildirishnoma ma'lumotini olish" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Bildirishnoma ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Bildirishnoma ma'lumoti" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Bildirishnoma topilmadi" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], NotificationController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Bildirishnoma ma'lumotini yangilash" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Bildirishnoma ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Bildirishnoma yangilandi" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Bildirishnoma topilmadi" }),
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminAuthGuard),
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_notification_dto_1.UpdateNotificationsDto]),
    __metadata("design:returntype", void 0)
], NotificationController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Bildirishnoma ma'lumotini o'chirish" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Bildirishnoma ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Bildirishnoma o'chirildi" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Bildirishnoma topilmadi" }),
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminAuthGuard),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NotificationController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Bildirishnomalar ro'yxatini olish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Bildirishnomalar ro'yxati" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NotificationController.prototype, "findAll", null);
exports.NotificationController = NotificationController = __decorate([
    (0, swagger_1.ApiTags)("Notification - Bildirishnomalar"),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)("notification"),
    __metadata("design:paramtypes", [notification_service_1.NotificationService])
], NotificationController);
//# sourceMappingURL=notification.controller.js.map