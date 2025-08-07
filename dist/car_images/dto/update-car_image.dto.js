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
exports.UpdateCarImagesDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_car_image_dto_1 = require("./create-car_image.dto");
class UpdateCarImagesDto extends (0, mapped_types_1.PartialType)(create_car_image_dto_1.CreateCarImagesDto) {
    car_id;
    image;
}
exports.UpdateCarImagesDto = UpdateCarImagesDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Avtomobil ID',
        example: 1
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: "car_id raqam bo'lishi kerak" }),
    __metadata("design:type", Number)
], UpdateCarImagesDto.prototype, "car_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Rasm URL yoki fayl nomi',
        example: 'car1.jpg'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "Rasm matn bo'lishi kerak" }),
    (0, class_validator_1.MinLength)(3, { message: "Rasm nomi kamida 3 ta harf bo'lishi kerak" }),
    __metadata("design:type", String)
], UpdateCarImagesDto.prototype, "image", void 0);
//# sourceMappingURL=update-car_image.dto.js.map