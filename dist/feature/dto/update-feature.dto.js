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
exports.UpdateFeatureDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_feature_dto_1 = require("./create-feature.dto");
class UpdateFeatureDto extends (0, mapped_types_1.PartialType)(create_feature_dto_1.CreateFeatureDto) {
    name;
}
exports.UpdateFeatureDto = UpdateFeatureDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Xususiyat nomi",
        example: "Bluetooth"
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "Nomi matn bo'lishi kerak" }),
    (0, class_validator_1.MinLength)(2, { message: "Nomi kamida 2 ta harf bo'lishi kerak" }),
    (0, class_validator_1.MaxLength)(10, { message: "Nomi 10 ta harfdan oshmasligi kerak" }),
    __metadata("design:type", String)
], UpdateFeatureDto.prototype, "name", void 0);
//# sourceMappingURL=update-feature.dto.js.map