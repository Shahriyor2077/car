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
exports.CreateRentalsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateRentalsDto {
    user_id;
    car_id;
    start_date;
    end_date;
    total_price;
    status;
}
exports.CreateRentalsDto = CreateRentalsDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Foydalanuvchi ID",
        example: 1,
    }),
    (0, class_validator_1.IsNumber)({}, { message: "Foydalanuvchi ID raqam bo'lishi kerak" }),
    (0, class_validator_1.IsPositive)({ message: "Foydalanuvchi ID musbat raqam bo'lishi kerak" }),
    __metadata("design:type", Number)
], CreateRentalsDto.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Avtomobil ID",
        example: 1,
    }),
    (0, class_validator_1.IsNumber)({}, { message: "Avtomobil ID raqam bo'lishi kerak" }),
    (0, class_validator_1.IsPositive)({ message: "Avtomobil ID musbat raqam bo'lishi kerak" }),
    __metadata("design:type", Number)
], CreateRentalsDto.prototype, "car_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Ijara boshlanish sanasi yyyy-mm-dd",
        example: "2024-01-15",
    }),
    (0, class_validator_1.IsDateString)({}, { message: "Boshlanish sanasi to'g'ri formatda bo'lishi kerak" }),
    __metadata("design:type", String)
], CreateRentalsDto.prototype, "start_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Ijara tugash sanasi",
        example: "2024-01-20",
    }),
    (0, class_validator_1.IsDateString)({}, { message: "Tugash sanasi to'g'ri formatda bo'lishi kerak" }),
    __metadata("design:type", String)
], CreateRentalsDto.prototype, "end_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Umumiy narxi",
        example: 2500000,
    }),
    (0, class_validator_1.IsNumber)({}, { message: "Narx raqam bo'lishi kerak" }),
    (0, class_validator_1.IsPositive)({ message: "Narx musbat raqam bo'lishi kerak" }),
    __metadata("design:type", Number)
], CreateRentalsDto.prototype, "total_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Ijara holati",
        example: "PENDING",
        enum: ["PENDING", "ACTIVE", "COMPLETED", "CANCELLED"],
    }),
    (0, class_validator_1.IsIn)(["PENDING", "ACTIVE", "COMPLETED", "CANCELLED"], {
        message: "Holat PENDING, ACTIVE, COMPLETED yoki CANCELLED bo'lishi kerak",
    }),
    __metadata("design:type", String)
], CreateRentalsDto.prototype, "status", void 0);
//# sourceMappingURL=create-rental.dto.js.map