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
exports.UpdateCarMaintenanceDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_car_maintenance_dto_1 = require("./create-car_maintenance.dto");
class UpdateCarMaintenanceDto extends (0, mapped_types_1.PartialType)(create_car_maintenance_dto_1.CreateCarMaintenanceDto) {
    car_id;
    service_date;
    description;
    cost;
}
exports.UpdateCarMaintenanceDto = UpdateCarMaintenanceDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Avtomobil ID",
        example: 1,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: "car_id raqam bo'lishi kerak" }),
    __metadata("design:type", Number)
], UpdateCarMaintenanceDto.prototype, "car_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Xizmat sanasi",
        example: "2024-08-01",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "Sana matn bo'lishi kerak" }),
    __metadata("design:type", String)
], UpdateCarMaintenanceDto.prototype, "service_date", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Xizmat tavsifi",
        example: "Moy almashtirildi.",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "Tavsif matn bo'lishi kerak" }),
    (0, class_validator_1.MinLength)(5, { message: "Tavsif kamida 5 ta harf bo'lishi kerak" }),
    __metadata("design:type", String)
], UpdateCarMaintenanceDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Xizmat narxi ",
        example: 500000,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: "Narx raqam bo'lishi kerak" }),
    __metadata("design:type", Number)
], UpdateCarMaintenanceDto.prototype, "cost", void 0);
//# sourceMappingURL=update-car_maintenance.dto.js.map