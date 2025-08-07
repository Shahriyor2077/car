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
exports.RentalController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/common/guards/jwt-auth.guard");
const rental_service_1 = require("./rental.service");
const create_rental_dto_1 = require("./dto/create-rental.dto");
const update_rental_dto_1 = require("./dto/update-rental.dto");
let RentalController = class RentalController {
    rentalService;
    constructor(rentalService) {
        this.rentalService = rentalService;
    }
    create(createRentalDto, req) {
        return this.rentalService.create(createRentalDto, req.user.sub);
    }
    findOne(id, req) {
        return this.rentalService.findOne(+id, req.user.sub, req.user.role);
    }
    findAll(req) {
        return this.rentalService.findAll(req.user.sub, req.user.role);
    }
    update(id, updateRentalDto, req) {
        return this.rentalService.update(+id, updateRentalDto, req.user.role);
    }
    remove(id, req) {
        return this.rentalService.remove(+id, req.user.role);
    }
};
exports.RentalController = RentalController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Ijara yaratish" }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Ijara yaratildi" }),
    (0, swagger_1.ApiResponse)({ status: 400, description: "Noto'g'ri ma'lumotlar" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_rental_dto_1.CreateRentalsDto, Object]),
    __metadata("design:returntype", void 0)
], RentalController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Ijara ma'lumotini olish" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Ijara ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Ijara ma'lumoti" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Ijara topilmadi" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], RentalController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Barcha ijara ma'lumotlarini olish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Ijara ro'yxati" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RentalController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Ijara ma'lumotini yangilash" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Ijara ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Ijara yangilandi" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Ijara topilmadi" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_rental_dto_1.UpdateRentalsDto, Object]),
    __metadata("design:returntype", void 0)
], RentalController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Ijara ma'lumotini o'chirish" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Ijara ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Ijara o'chirildi" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Ijara topilmadi" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], RentalController.prototype, "remove", null);
exports.RentalController = RentalController = __decorate([
    (0, swagger_1.ApiTags)("Rental - Ijara"),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)("rental"),
    __metadata("design:paramtypes", [rental_service_1.RentalService])
], RentalController);
//# sourceMappingURL=rental.controller.js.map