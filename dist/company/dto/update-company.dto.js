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
exports.UpdateCompaniesDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const create_company_dto_1 = require("./create-company.dto");
class UpdateCompaniesDto extends (0, mapped_types_1.PartialType)(create_company_dto_1.CreateCompaniesDto) {
    name;
    address;
    phone;
    license_number;
}
exports.UpdateCompaniesDto = UpdateCompaniesDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Kompaniya nomi",
        example: "Avto Ijara MChJ"
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "Kompaniya nomi matn bo'lishi kerak" }),
    (0, class_validator_1.MinLength)(2, { message: "Kompaniya nomi kamida 2 ta harf bo'lishi kerak" }),
    (0, class_validator_1.MaxLength)(100, { message: "Kompaniya nomi 100 ta harfdan oshmasligi kerak" }),
    __metadata("design:type", String)
], UpdateCompaniesDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Kompaniya manzili",
        example: "Toshkent shahri, Chilonzor tumani, 2-uy"
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "Manzil matn bo'lishi kerak" }),
    (0, class_validator_1.MinLength)(10, { message: "Manzil kamida 10 ta harf bo'lishi kerak" }),
    (0, class_validator_1.MaxLength)(200, { message: "Manzil 200 ta harfdan oshmasligi kerak" }),
    __metadata("design:type", String)
], UpdateCompaniesDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Telefon raqami",
        example: "+998901234567"
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "Telefon raqami matn bo'lishi kerak" }),
    __metadata("design:type", String)
], UpdateCompaniesDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Litsenziya raqami",
        example: "L123456789"
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "Litsenziya raqami matn bo'lishi kerak" }),
    (0, class_validator_1.MinLength)(5, { message: "Litsenziya raqami kamida 5 ta belgi bo'lishi kerak" }),
    (0, class_validator_1.MaxLength)(20, { message: "Litsenziya raqami 20 ta belgidan oshmasligi kerak" }),
    __metadata("design:type", String)
], UpdateCompaniesDto.prototype, "license_number", void 0);
//# sourceMappingURL=update-company.dto.js.map