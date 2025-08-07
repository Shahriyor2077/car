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
exports.CarController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/common/guards/jwt-auth.guard");
const manager_only_guard_1 = require("../auth/common/guards/manager-only.guard");
const car_service_1 = require("./car.service");
const create_car_dto_1 = require("./dto/create-car.dto");
const update_car_dto_1 = require("./dto/update-car.dto");
let CarController = class CarController {
    carService;
    constructor(carService) {
        this.carService = carService;
    }
    async create(createCarDto) {
        return await this.carService.create(createCarDto);
    }
    findAll() {
        return this.carService.findAll();
    }
    findByColor(color) {
        return this.carService.findByColor(color);
    }
    findByYear(year) {
        return this.carService.findByYear(year);
    }
    findByPrice(minPrice, maxPrice) {
        return this.carService.findByPrice(minPrice ? +minPrice : undefined, maxPrice ? +maxPrice : undefined);
    }
    findByRating(minRating, maxRating) {
        return this.carService.findByRating(minRating ? +minRating : undefined, maxRating ? +maxRating : undefined);
    }
    findOne(id) {
        return this.carService.findOne(+id);
    }
    update(id, updateCarDto) {
        return this.carService.update(+id, updateCarDto);
    }
    remove(id) {
        return this.carService.remove(+id);
    }
};
exports.CarController = CarController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Avtomobil yaratish" }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Avtomobil muvaffaqiyatli yaratildi" }),
    (0, swagger_1.ApiResponse)({ status: 400, description: "Noto'g'ri ma'lumotlar" }),
    (0, common_1.UseGuards)(manager_only_guard_1.ManagerOnlyGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_car_dto_1.CreateCarDto]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Barcha avtomobillar ro'yxatini olish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Avtomobillar ro'yxati" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CarController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Avtomobillarni rangi bo'yicha qidirish" }),
    (0, swagger_1.ApiQuery)({ name: "color", required: true, description: "Avtomobil rangi" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Rang bo'yicha topilgan avtomobillar" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)("search/color"),
    __param(0, (0, common_1.Query)("color")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarController.prototype, "findByColor", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Avtomobillarni yili bo'yicha qidirish" }),
    (0, swagger_1.ApiQuery)({ name: "year", required: true, description: "Avtomobil yili" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Yil bo'yicha topilgan avtomobillar" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)("search/year"),
    __param(0, (0, common_1.Query)("year")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarController.prototype, "findByYear", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Avtomobillarni narxi bo'yicha qidirish" }),
    (0, swagger_1.ApiQuery)({ name: "minPrice", required: false, description: "Minimal narx" }),
    (0, swagger_1.ApiQuery)({ name: "maxPrice", required: false, description: "Maksimal narx" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Narx bo'yicha topilgan avtomobillar" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)("search/price"),
    __param(0, (0, common_1.Query)("minPrice")),
    __param(1, (0, common_1.Query)("maxPrice")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CarController.prototype, "findByPrice", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Avtomobillarni reytingi bo'yicha qidirish" }),
    (0, swagger_1.ApiQuery)({ name: "minRating", required: false, description: "Minimal reyting" }),
    (0, swagger_1.ApiQuery)({ name: "maxRating", required: false, description: "Maksimal reyting" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Reyting bo'yicha topilgan avtomobillar" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)("search/rating"),
    __param(0, (0, common_1.Query)("minRating")),
    __param(1, (0, common_1.Query)("maxRating")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CarController.prototype, "findByRating", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Avtomobil ma'lumotini olish" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Avtomobil ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Avtomobil ma'lumoti" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Avtomobil topilmadi" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Avtomobil ma'lumotini yangilash" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Avtomobil ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Avtomobil yangilandi" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Avtomobil topilmadi" }),
    (0, common_1.UseGuards)(manager_only_guard_1.ManagerOnlyGuard),
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_car_dto_1.UpdateCarDto]),
    __metadata("design:returntype", void 0)
], CarController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Avtomobil ma'lumotini o'chirish" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Avtomobil ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Avtomobil o'chirildi" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Avtomobil topilmadi" }),
    (0, common_1.UseGuards)(manager_only_guard_1.ManagerOnlyGuard),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarController.prototype, "remove", null);
exports.CarController = CarController = __decorate([
    (0, swagger_1.ApiTags)("Car - Avtomobillar"),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)("car"),
    __metadata("design:paramtypes", [car_service_1.CarService])
], CarController);
//# sourceMappingURL=car.controller.js.map