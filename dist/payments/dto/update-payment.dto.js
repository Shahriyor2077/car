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
exports.UpdatePaymentsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_payment_dto_1 = require("./create-payment.dto");
class UpdatePaymentsDto extends (0, mapped_types_1.PartialType)(create_payment_dto_1.CreatePaymentsDto) {
    rental_id;
    amount;
    payment_date;
    payment_method;
}
exports.UpdatePaymentsDto = UpdatePaymentsDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Ijara ID",
        example: 1,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: "Ijara ID raqam bo'lishi kerak" }),
    __metadata("design:type", Number)
], UpdatePaymentsDto.prototype, "rental_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "To'lov miqdori",
        example: 500000,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: "To'lov miqdori raqam bo'lishi kerak" }),
    __metadata("design:type", Number)
], UpdatePaymentsDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "To'lov sanasi ",
        example: "2024-01-15",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)({}, { message: "To'lov sanasi to'g'ri formatda bo'lishi kerak" }),
    __metadata("design:type", String)
], UpdatePaymentsDto.prototype, "payment_date", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "To'lov usuli ",
        example: "CASH",
        enum: ["CASH", "CARD", "TRANSFER"],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(["CASH", "CARD", "TRANSFER"], {
        message: "To'lov usuli to'g'ri bo'lishi kerak",
    }),
    __metadata("design:type", String)
], UpdatePaymentsDto.prototype, "payment_method", void 0);
//# sourceMappingURL=update-payment.dto.js.map