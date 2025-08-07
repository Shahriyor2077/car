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
exports.UpdateDocumentsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_document_dto_1 = require("./create-document.dto");
class UpdateDocumentsDto extends (0, mapped_types_1.PartialType)(create_document_dto_1.CreateDocumentsDto) {
    user_id;
    deliver_license;
}
exports.UpdateDocumentsDto = UpdateDocumentsDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Foydalanuvchi ID",
        example: 1,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: "user_id raqam bolishi kerak" }),
    __metadata("design:type", Number)
], UpdateDocumentsDto.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: "Haydovchilik guvohnomasi raqami",
        example: "AA1234567",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "Guvohnoma raqami matn bolishi kerak" }),
    (0, class_validator_1.MinLength)(5, { message: "Guvohnoma raqami kamida 5 ta harf bolishi kerak" }),
    __metadata("design:type", String)
], UpdateDocumentsDto.prototype, "deliver_license", void 0);
//# sourceMappingURL=update-document.dto.js.map