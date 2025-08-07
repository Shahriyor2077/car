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
exports.CreateDocumentsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateDocumentsDto {
    user_id;
    deliver_license;
}
exports.CreateDocumentsDto = CreateDocumentsDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Foydalanuvchi ID ',
        example: 1
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'user_id raqam bolishi kerak' }),
    __metadata("design:type", Number)
], CreateDocumentsDto.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Haydovchilik guvohnomasi raqami',
        example: 'AA1234567'
    }),
    (0, class_validator_1.IsString)({ message: 'Hujjat raqami matn bolishi kerak' }),
    (0, class_validator_1.MinLength)(5, { message: 'Hujjat raqami kamida 5 ta harf bolishi kerak' }),
    __metadata("design:type", String)
], CreateDocumentsDto.prototype, "deliver_license", void 0);
//# sourceMappingURL=create-document.dto.js.map