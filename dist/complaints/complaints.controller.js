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
exports.ComplaintsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/common/guards/jwt-auth.guard");
const complaints_service_1 = require("./complaints.service");
const create_complaint_dto_1 = require("./dto/create-complaint.dto");
const update_complaint_dto_1 = require("./dto/update-complaint.dto");
let ComplaintsController = class ComplaintsController {
    complaintsService;
    constructor(complaintsService) {
        this.complaintsService = complaintsService;
    }
    create(createComplaintDto, req) {
        return this.complaintsService.create(createComplaintDto, req.user.sub);
    }
    findOne(id, req) {
        return this.complaintsService.findOne(+id, req.user.sub, req.user.role);
    }
    update(id, updateComplaintDto) {
        return this.complaintsService.update(+id, updateComplaintDto);
    }
    remove(id) {
        return this.complaintsService.remove(+id);
    }
    findAll() {
        return this.complaintsService.findAll();
    }
};
exports.ComplaintsController = ComplaintsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Shikoyat yaratish" }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: "Shikoyat yaratildi",
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: "Noto'g'ri ma'lumotlar" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_complaint_dto_1.CreateComplaintsDto, Object]),
    __metadata("design:returntype", void 0)
], ComplaintsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Shikoyat ma'lumotini olish" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Shikoyat ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Shikoyat ma'lumoti" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Shikoyat topilmadi" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ComplaintsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Shikoyat ma'lumotini yangilash" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Shikoyat ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Shikoyat yangilandi" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Shikoyat topilmadi" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_complaint_dto_1.UpdateComplaintsDto]),
    __metadata("design:returntype", void 0)
], ComplaintsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Shikoyat ma'lumotini o'chirish" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Shikoyat ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Shikoyat o'chirildi" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Shikoyat topilmadi" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ComplaintsController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Barcha shikoyatlar ro'yxatini olish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Shikoyatlar ro'yxati" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ComplaintsController.prototype, "findAll", null);
exports.ComplaintsController = ComplaintsController = __decorate([
    (0, swagger_1.ApiTags)("Complaints - Shikoyatlar"),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)("complaints"),
    __metadata("design:paramtypes", [complaints_service_1.ComplaintsService])
], ComplaintsController);
//# sourceMappingURL=complaints.controller.js.map