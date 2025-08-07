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
exports.UpdateBranchesDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_branch_dto_1 = require("./create-branch.dto");
class UpdateBranchesDto extends (0, mapped_types_1.PartialType)(create_branch_dto_1.CreateBranchesDto) {
    name;
    address;
    company_id;
    phone;
}
exports.UpdateBranchesDto = UpdateBranchesDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Filial nomi",
        example: "Toshkent markaziy filiali"
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "Filial nomi matn bo'lishi kerak" }),
    (0, class_validator_1.MinLength)(2, { message: "Filial nomi kamida 2 ta harf bo'lishi kerak" }),
    (0, class_validator_1.MaxLength)(100, { message: "Filial nomi 100 ta harfdan oshmasligi kerak" }),
    __metadata("design:type", String)
], UpdateBranchesDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Filial manzili",
        example: "Toshkent shahri, Chilonzor tumani, 1-uy"
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "Manzil matn bo'lishi kerak" }),
    (0, class_validator_1.MinLength)(10, { message: "Manzil kamida 10 ta harf bo'lishi kerak" }),
    (0, class_validator_1.MaxLength)(200, { message: "Manzil 200 ta harfdan oshmasligi kerak" }),
    __metadata("design:type", String)
], UpdateBranchesDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Kompaniya ID",
        example: 1
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: "Kompaniya ID raqam bo'lishi kerak" }),
    (0, class_validator_1.IsPositive)({ message: "Kompaniya ID musbat raqam bo'lishi kerak" }),
    __metadata("design:type", Number)
], UpdateBranchesDto.prototype, "company_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Telefon raqami",
        example: "+998901234567"
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "Telefon raqami matn bo'lishi kerak" }),
    __metadata("design:type", String)
], UpdateBranchesDto.prototype, "phone", void 0);
//# sourceMappingURL=update-branch.dto.js.map