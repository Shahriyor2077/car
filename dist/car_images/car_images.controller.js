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
exports.CarImagesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const admin_auth_guard_1 = require("../auth/common/guards/admin-auth.guard");
const car_images_service_1 = require("./car_images.service");
const create_car_image_dto_1 = require("./dto/create-car_image.dto");
const update_car_image_dto_1 = require("./dto/update-car_image.dto");
let CarImagesController = class CarImagesController {
    carImagesService;
    constructor(carImagesService) {
        this.carImagesService = carImagesService;
    }
    create(createCarImageDto) {
        return this.carImagesService.create(createCarImageDto);
    }
    findOne(id) {
        return this.carImagesService.findOne(+id);
    }
    update(id, updateCarImageDto) {
        return this.carImagesService.update(+id, updateCarImageDto);
    }
    remove(id) {
        return this.carImagesService.remove(+id);
    }
    findAll() {
        return this.carImagesService.findAll();
    }
};
exports.CarImagesController = CarImagesController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Avtomobil rasmi yaratish" }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Avtomobil rasmi yaratildi" }),
    (0, swagger_1.ApiResponse)({ status: 400, description: "Noto'g'ri ma'lumotlar" }),
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_car_image_dto_1.CreateCarImagesDto]),
    __metadata("design:returntype", void 0)
], CarImagesController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Avtomobil rasmi ma'lumotini olish" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Avtomobil rasmi ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Avtomobil rasmi ma'lumoti" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Avtomobil rasmi topilmadi" }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarImagesController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Avtomobil rasmi ma'lumotini yangilash" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Avtomobil rasmi ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Avtomobil rasmi yangilandi" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Avtomobil rasmi topilmadi" }),
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminAuthGuard),
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_car_image_dto_1.UpdateCarImagesDto]),
    __metadata("design:returntype", void 0)
], CarImagesController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Avtomobil rasmi ma'lumotini o'chirish" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Avtomobil rasmi ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Avtomobil rasmi o'chirildi" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Avtomobil rasmi topilmadi" }),
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminAuthGuard),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarImagesController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Barcha avtomobil rasmlari ro'yxatini olish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Avtomobil rasmlari ro'yxati" }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CarImagesController.prototype, "findAll", null);
exports.CarImagesController = CarImagesController = __decorate([
    (0, swagger_1.ApiTags)("Car Images - Avtomobil Rasmlari"),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)("car-images"),
    __metadata("design:paramtypes", [car_images_service_1.CarImagesService])
], CarImagesController);
//# sourceMappingURL=car_images.controller.js.map