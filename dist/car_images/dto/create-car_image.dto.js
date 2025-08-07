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
exports.CreateCarImagesDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateCarImagesDto {
    car_id;
    image;
}
exports.CreateCarImagesDto = CreateCarImagesDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Avtomobil ID",
        example: 1
    }),
    (0, class_validator_1.IsNumber)({}, { message: "car_id raqam bolishi kerak" }),
    __metadata("design:type", Number)
], CreateCarImagesDto.prototype, "car_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Rasm URL yoki fayl nomi",
        example: "car1.jpg"
    }),
    (0, class_validator_1.IsString)({ message: "Rasm matn bo'lishi kerak" }),
    (0, class_validator_1.MinLength)(3, { message: "Rasm nomi kamida 3 ta harf bo'lishi kerak" }),
    __metadata("design:type", String)
], CreateCarImagesDto.prototype, "image", void 0);
//# sourceMappingURL=create-car_image.dto.js.map