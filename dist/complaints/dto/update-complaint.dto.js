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
exports.UpdateComplaintsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_complaint_dto_1 = require("./create-complaint.dto");
class UpdateComplaintsDto extends (0, mapped_types_1.PartialType)(create_complaint_dto_1.CreateComplaintsDto) {
    user_id;
    message;
    rental_id;
}
exports.UpdateComplaintsDto = UpdateComplaintsDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Foydalanuvchi ID ",
        example: 1
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: "user_id raqam bo'lishi kerak" }),
    __metadata("design:type", Number)
], UpdateComplaintsDto.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Shikoyat matni ",
        example: "Avtomobil kechikib yetkazildi."
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "Shikoyat matn bo'lishi kerak" }),
    (0, class_validator_1.MinLength)(5, { message: "Shikoyat kamida 5 ta harf bo'lishi kerak" }),
    __metadata("design:type", String)
], UpdateComplaintsDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Ijaraga olingan avtomobil ID ",
        example: 10
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: "rental_id raqam bo'lishi kerak" }),
    __metadata("design:type", Number)
], UpdateComplaintsDto.prototype, "rental_id", void 0);
//# sourceMappingURL=update-complaint.dto.js.map