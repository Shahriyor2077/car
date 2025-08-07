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
exports.UpdateUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const create_user_dto_1 = require("./create-user.dto");
class UpdateUserDto extends (0, mapped_types_1.PartialType)(create_user_dto_1.CreateUserDto) {
    full_name;
    phone;
    email;
    password;
    birthday;
    is_active;
}
exports.UpdateUserDto = UpdateUserDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Foydalanuvchining to'liq ismi",
        example: "Aziz Azizov"
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "Ism matn bo'lishi kerak" }),
    (0, class_validator_1.MinLength)(2, { message: "Ism kamida 2 ta harf bo'lishi kerak" }),
    (0, class_validator_1.MaxLength)(50, { message: "Ism 50 ta harfdan oshmasligi kerak" }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "full_name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Telefon raqami",
        example: "+998901234567"
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "Telefon raqami matn bo'lishi kerak" }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Email manzili",
        example: "aziz@example.com"
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)({}, { message: "To'g'ri email kiriting" }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Parol",
        example: "123456"
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "Parol matn bo'lishi kerak" }),
    (0, class_validator_1.MinLength)(6, { message: "Parol kamida 6 ta belgi bo'lishi kerak" }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Tug'ilgan kun ",
        example: "1990-01-01"
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "Tug'ilgan kun matn bo'lishi kerak" }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "birthday", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Foydalanuvchi faolmi"
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)({ message: "Faollik bo'lishi kerak" }),
    __metadata("design:type", Boolean)
], UpdateUserDto.prototype, "is_active", void 0);
//# sourceMappingURL=update-user.dto.js.map