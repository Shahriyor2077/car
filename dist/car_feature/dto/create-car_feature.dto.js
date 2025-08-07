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
exports.CreateCarFeatureDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateCarFeatureDto {
    car_id;
    feature_id;
}
exports.CreateCarFeatureDto = CreateCarFeatureDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Avtomobil ID",
        example: 1,
    }),
    (0, class_validator_1.IsNumber)({}, { message: "car_id raqam bo'lishi kerak" }),
    __metadata("design:type", Number)
], CreateCarFeatureDto.prototype, "car_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Xususiyat ID",
        example: 2,
    }),
    (0, class_validator_1.IsNumber)({}, { message: "feature_id raqam bo'lishi kerak" }),
    __metadata("design:type", Number)
], CreateCarFeatureDto.prototype, "feature_id", void 0);
//# sourceMappingURL=create-car_feature.dto.js.map