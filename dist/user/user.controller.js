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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/common/guards/jwt-auth.guard");
const self_guard_1 = require("../auth/common/guards/self.guard");
const admin_auth_guard_1 = require("../auth/common/guards/admin-auth.guard");
const user_service_1 = require("./user.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
let UserController = class UserController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    create(createUserDto) {
        return this.userService.create(createUserDto);
    }
    findOne(id) {
        return this.userService.findOne(+id);
    }
    update(id, updateUserDto) {
        return this.userService.update(+id, updateUserDto);
    }
    remove(id) {
        return this.userService.remove(+id);
    }
    findAll() {
        return this.userService.findAll();
    }
};
exports.UserController = UserController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Foydalanuvchi qo'shish" }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: "Foydalanuvchi yaratildi",
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: "Noto'g'ri ma'lumot" }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Foydalanuvchi ma'lumotini olish" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Foydalanuvchi ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Foydalanuvchi ma'lumoti" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Foydalanuvchi topilmadi" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, self_guard_1.SelfGuard),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Foydalanuvchi ma'lumotini yangilash" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Foydalanuvchi ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Foydalanuvchi yangilandi" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Foydalanuvchi topilmadi" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, self_guard_1.SelfGuard),
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Foydalanuvchi ma'lumotini o'chirish" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Foydalanuvchi ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Foydalanuvchi o'chirildi" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Foydalanuvchi topilmadi" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, self_guard_1.SelfGuard),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Barcha foydalanuvchilar ro'yxatini olish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Foydalanuvchilar ro'yxati" }),
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminAuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findAll", null);
exports.UserController = UserController = __decorate([
    (0, swagger_1.ApiTags)("User - Foydalanuvchilar"),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)("user"),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map