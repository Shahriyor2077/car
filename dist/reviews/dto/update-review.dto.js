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
exports.UpdateReviewsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_review_dto_1 = require("./create-review.dto");
class UpdateReviewsDto extends (0, mapped_types_1.PartialType)(create_review_dto_1.CreateReviewsDto) {
    user_id;
    car_id;
    comment;
    rating;
}
exports.UpdateReviewsDto = UpdateReviewsDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Foydalanuvchi id",
        example: 1,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: "Foydalanuvchi ID raqam bo'lishi kerak" }),
    __metadata("design:type", Number)
], UpdateReviewsDto.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Avtomobil ID",
        example: 1,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: "Avtomobil ID raqam bo'lishi kerak" }),
    __metadata("design:type", Number)
], UpdateReviewsDto.prototype, "car_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Sharh matni",
        example: "Avtomobil juda yaxshi ishlaydi",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "Sharh matn bo'lishi kerak" }),
    (0, class_validator_1.MinLength)(10, { message: "Sharh kamida 10 ta harf bo'lishi kerak" }),
    (0, class_validator_1.MaxLength)(500, { message: "Sharh 500 ta harfdan oshmasligi kerak" }),
    __metadata("design:type", String)
], UpdateReviewsDto.prototype, "comment", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Baho (1-5)",
        example: "5",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "Baho matn bo'lishi kerak" }),
    __metadata("design:type", String)
], UpdateReviewsDto.prototype, "rating", void 0);
//# sourceMappingURL=update-review.dto.js.map