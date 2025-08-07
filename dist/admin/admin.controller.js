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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const admin_auth_guard_1 = require("../auth/common/guards/admin-auth.guard");
const manager_only_guard_1 = require("../auth/common/guards/manager-only.guard");
const admin_service_1 = require("./admin.service");
const create_admin_dto_1 = require("./dto/create-admin.dto");
const update_admin_dto_1 = require("./dto/update-admin.dto");
let AdminController = class AdminController {
    adminService;
    constructor(adminService) {
        this.adminService = adminService;
    }
    async register(createAdminDto, req) {
        const currentAdminRole = req.user?.role || "ADMIN";
        return this.adminService.create(createAdminDto, currentAdminRole);
    }
    async login(body, res) {
        const { accessToken, refreshToken } = await this.adminService.login(body.email, body.password);
        res.cookie("adminRefreshToken", refreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
            path: "/admin/refresh"
        });
        res.setHeader("Authorization", `Bearer ${accessToken}`);
        return {
            message: "Admin login muvaffaqiyatli",
            success: true,
            accessToken,
            refreshToken
        };
    }
    async refresh(req, res) {
        const oldRefreshToken = req.cookies["adminRefreshToken"];
        const { accessToken, refreshToken } = await this.adminService.refreshToken(oldRefreshToken);
        res.cookie("adminRefreshToken", refreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
            path: "/admin/refresh"
        });
        res.setHeader("Authorization", `Bearer ${accessToken}`);
        return {
            message: "Token yangilandi",
            success: true,
            accessToken,
            refreshToken
        };
    }
    async logout(res) {
        res.clearCookie("adminRefreshToken", {
            path: "/admin/refresh",
            httpOnly: true,
            secure: false,
            sameSite: "strict"
        });
        res.removeHeader("Authorization");
        return {
            message: "Admin logout muvaffaqiyatli",
            success: true
        };
    }
    findAll() {
        return this.adminService.findAll();
    }
    findOne(id) {
        return this.adminService.findOne(+id);
    }
    update(id, updateAdminDto) {
        return this.adminService.update(+id, updateAdminDto);
    }
    remove(id) {
        return this.adminService.remove(+id);
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Admin ro'yxatdan o'tkazish" }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Admin muvaffaqiyatli yaratildi" }),
    (0, swagger_1.ApiResponse)({ status: 400, description: "Noto'g'ri ma'lumotlar" }),
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminAuthGuard, manager_only_guard_1.ManagerOnlyGuard),
    (0, common_1.Post)("register"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_admin_dto_1.CreateAdminDto, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "register", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Admin tizimga kirish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Muvaffaqiyatli kirish" }),
    (0, swagger_1.ApiResponse)({ status: 401, description: "Noto'g'ri ma'lumotlar" }),
    (0, common_1.Post)("login"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "login", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Admin token yangilash" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Token yangilandi" }),
    (0, swagger_1.ApiResponse)({ status: 401, description: "Noto'g'ri refresh token" }),
    (0, common_1.Post)("refresh"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "refresh", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Admin tizimdan chiqish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Muvaffaqiyatli chiqish" }),
    (0, common_1.Post)("logout"),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "logout", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Barcha admin'lar ro'yxatini olish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Admin'lar ro'yxati" }),
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminAuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Admin ma'lumotini olish" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Admin ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Admin ma'lumoti" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Admin topilmadi" }),
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminAuthGuard),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Admin ma'lumotini yangilash" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Admin ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Admin yangilandi" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Admin topilmadi" }),
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminAuthGuard),
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_admin_dto_1.UpdateAdminDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Admin ma'lumotini o'chirish" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Admin ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Admin o'chirildi" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Admin topilmadi" }),
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminAuthGuard),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "remove", null);
exports.AdminController = AdminController = __decorate([
    (0, swagger_1.ApiTags)("Admin - Administratorlar"),
    (0, common_1.Controller)("admin"),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map