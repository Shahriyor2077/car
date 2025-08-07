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
exports.PaymentsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/common/guards/jwt-auth.guard");
const payments_service_1 = require("./payments.service");
const update_payment_dto_1 = require("./dto/update-payment.dto");
const create_payment_dto_1 = require("./dto/create-payment.dto");
let PaymentsController = class PaymentsController {
    paymentsService;
    constructor(paymentsService) {
        this.paymentsService = paymentsService;
    }
    create(createPaymentDto) {
        return this.paymentsService.create(createPaymentDto);
    }
    findOne(id, req) {
        return this.paymentsService.findOne(+id, req.user.sub, req.user.role);
    }
    update(id, updatePaymentDto) {
        return this.paymentsService.update(+id, updatePaymentDto);
    }
    remove(id) {
        return this.paymentsService.remove(+id);
    }
    findAll(req) {
        return this.paymentsService.findAll(req.user.sub, req.user.role);
    }
};
exports.PaymentsController = PaymentsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "To'lov yaratish" }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "To'lov yaratildi" }),
    (0, swagger_1.ApiResponse)({ status: 400, description: "Noto'g'ri ma'lumotlar" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_payment_dto_1.CreatePaymentsDto]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "To'lov ma'lumotini olish" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "To'lov ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "To'lov ma'lumoti" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "To'lov topilmadi" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "To'lov ma'lumotini yangilash" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "To'lov ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "To'lov yangilandi" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "To'lov topilmadi" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_payment_dto_1.UpdatePaymentsDto]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "To'lov ma'lumotini o'chirish" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "To'lov ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "To'lov o'chirildi" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "To'lov topilmadi" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "To'lovlar ro'yxatini olish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "To'lovlar ro'yxati" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "findAll", null);
exports.PaymentsController = PaymentsController = __decorate([
    (0, swagger_1.ApiTags)("Payments - To'lovlar"),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)("payments"),
    __metadata("design:paramtypes", [payments_service_1.PaymentsService])
], PaymentsController);
//# sourceMappingURL=payments.controller.js.map