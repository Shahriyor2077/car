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
exports.CarMaintenanceController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const admin_auth_guard_1 = require("../auth/common/guards/admin-auth.guard");
const car_maintenance_service_1 = require("./car_maintenance.service");
const create_car_maintenance_dto_1 = require("./dto/create-car_maintenance.dto");
const update_car_maintenance_dto_1 = require("./dto/update-car_maintenance.dto");
let CarMaintenanceController = class CarMaintenanceController {
    carMaintenanceService;
    constructor(carMaintenanceService) {
        this.carMaintenanceService = carMaintenanceService;
    }
    create(createCarMaintenanceDto) {
        return this.carMaintenanceService.create(createCarMaintenanceDto);
    }
    findOne(id) {
        return this.carMaintenanceService.findOne(+id);
    }
    update(id, updateCarMaintenanceDto) {
        return this.carMaintenanceService.update(+id, updateCarMaintenanceDto);
    }
    remove(id) {
        return this.carMaintenanceService.remove(+id);
    }
    findAll() {
        return this.carMaintenanceService.findAll();
    }
};
exports.CarMaintenanceController = CarMaintenanceController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Texnik xizmat yaratish" }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: "Texnik xizmat yaratildi",
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: "Noto'g'ri ma'lumotlar" }),
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_car_maintenance_dto_1.CreateCarMaintenanceDto]),
    __metadata("design:returntype", void 0)
], CarMaintenanceController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Texnik xizmat ma'lumotini olish" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Texnik xizmat ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Texnik xizmat ma'lumoti" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Texnik xizmat topilmadi" }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarMaintenanceController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Texnik xizmat ma'lumotini yangilash" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Texnik xizmat ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Texnik xizmat yangilandi" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Texnik xizmat topilmadi" }),
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminAuthGuard),
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_car_maintenance_dto_1.UpdateCarMaintenanceDto]),
    __metadata("design:returntype", void 0)
], CarMaintenanceController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Texnik xizmat ma'lumotini o'chirish" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Texnik xizmat ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Texnik xizmat o'chirildi" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Texnik xizmat topilmadi" }),
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminAuthGuard),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarMaintenanceController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Barcha texnik xizmatlar ro'yxatini olish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Texnik xizmatlar ro'yxati" }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CarMaintenanceController.prototype, "findAll", null);
exports.CarMaintenanceController = CarMaintenanceController = __decorate([
    (0, swagger_1.ApiTags)("Car Maintenance - Texnik Xizmat"),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)("car-maintenance"),
    __metadata("design:paramtypes", [car_maintenance_service_1.CarMaintenanceService])
], CarMaintenanceController);
//# sourceMappingURL=car_maintenance.controller.js.map