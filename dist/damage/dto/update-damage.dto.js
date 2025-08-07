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
exports.UpdateDamagesDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_damage_dto_1 = require("./create-damage.dto");
class UpdateDamagesDto extends (0, mapped_types_1.PartialType)(create_damage_dto_1.CreateDamagesDto) {
    rental_id;
    description;
    cost_estimate;
    damage_date;
}
exports.UpdateDamagesDto = UpdateDamagesDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Ijaraga olingan avtomobil ID",
        example: 1,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: "rental_id raqam bo'lishi kerak" }),
    __metadata("design:type", Number)
], UpdateDamagesDto.prototype, "rental_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Zarar tavsifi ",
        example: "Old bamperda tirnalgan joy bor.",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "Tavsif matn bo'lishi kerak" }),
    (0, class_validator_1.MinLength)(5, { message: "Tavsif kamida 5 ta harf bo'lishi kerak" }),
    __metadata("design:type", String)
], UpdateDamagesDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Zarar qiymati",
        example: "500000",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "Qiymat matn bo'lishi kerak" }),
    __metadata("design:type", String)
], UpdateDamagesDto.prototype, "cost_estimate", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Zarar sanasi",
        example: "2024-08-01",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)({}, { message: "Sana ISO formatda bo'lishi kerak" }),
    __metadata("design:type", String)
], UpdateDamagesDto.prototype, "damage_date", void 0);
//# sourceMappingURL=update-damage.dto.js.map