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
exports.CreateCarDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateCarDto {
    branch_id;
    brand;
    model;
    year;
    color;
    mileage;
    price_per_day;
    is_available;
}
exports.CreateCarDto = CreateCarDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Filial ID",
        example: 1
    }),
    (0, class_validator_1.IsNumber)({}, { message: "Filial ID raqam bo'lishi kerak" }),
    (0, class_validator_1.IsPositive)({ message: "Filial ID musbat raqam bo'lishi kerak" }),
    __metadata("design:type", Number)
], CreateCarDto.prototype, "branch_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Avtomobil brendi",
        example: "Toyota"
    }),
    (0, class_validator_1.IsString)({ message: "Brend matn bo'lishi kerak" }),
    (0, class_validator_1.MinLength)(2, { message: "Brend kamida 2 ta harf bo'lishi kerak" }),
    (0, class_validator_1.MaxLength)(50, { message: "Brend 50 ta harfdan oshmasligi kerak" }),
    __metadata("design:type", String)
], CreateCarDto.prototype, "brand", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Avtomobil modeli",
        example: "Camry"
    }),
    (0, class_validator_1.IsString)({ message: "Model matn bo'lishi kerak" }),
    (0, class_validator_1.MinLength)(2, { message: "Model kamida 2 ta harf bo'lishi kerak" }),
    (0, class_validator_1.MaxLength)(50, { message: "Model 50 ta harfdan oshmasligi kerak" }),
    __metadata("design:type", String)
], CreateCarDto.prototype, "model", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Ishlab chiqarilgan yili",
        example: "2020"
    }),
    (0, class_validator_1.IsString)({ message: "Yil matn bo'lishi kerak" }),
    __metadata("design:type", String)
], CreateCarDto.prototype, "year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Rang",
        example: "red"
    }),
    (0, class_validator_1.IsString)({ message: "Rang matn bo'lishi kerak" }),
    __metadata("design:type", String)
], CreateCarDto.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Yurgan masofa (km)",
        example: 50000
    }),
    (0, class_validator_1.IsNumber)({}, { message: "Masofa raqam bo'lishi kerak" }),
    (0, class_validator_1.IsPositive)({ message: "Masofa musbat raqam bo'lishi kerak" }),
    __metadata("design:type", Number)
], CreateCarDto.prototype, "mileage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Kunlik narxi",
        example: "500000"
    }),
    (0, class_validator_1.IsString)({ message: "Narx matn bo'lishi kerak" }),
    __metadata("design:type", String)
], CreateCarDto.prototype, "price_per_day", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Avtomobil mavjudmi",
        example: true
    }),
    (0, class_validator_1.IsBoolean)({ message: "Mavjudlik mantiqiy qiymat bo'lishi kerak" }),
    __metadata("design:type", Boolean)
], CreateCarDto.prototype, "is_available", void 0);
//# sourceMappingURL=create-car.dto.js.map