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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/common/guards/jwt-auth.guard");
const manager_only_guard_1 = require("../auth/common/guards/manager-only.guard");
const company_service_1 = require("./company.service");
const create_company_dto_1 = require("./dto/create-company.dto");
const update_company_dto_1 = require("./dto/update-company.dto");
let CompanyController = class CompanyController {
    companyService;
    constructor(companyService) {
        this.companyService = companyService;
    }
    async findAll() {
        try {
            const result = await this.companyService.findAll();
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async findOne(id) {
        return await this.companyService.findOne(+id);
    }
    create(createCompanyDto) {
        return this.companyService.create(createCompanyDto);
    }
    update(id, updateCompanyDto) {
        return this.companyService.update(+id, updateCompanyDto);
    }
    async remove(id) {
        return await this.companyService.remove(+id);
    }
};
exports.CompanyController = CompanyController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Barcha kompaniyalar ro'yxatini olish" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Kompaniyalar ro'yxati" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Kompaniya ma'lumotini olish" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Kompaniya ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Kompaniya ma'lumoti" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Kompaniya topilmadi" }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Kompaniya yaratish" }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: "Kompaniya yaratildi",
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: "Noto'g'ri ma'lumotlar" }),
    (0, common_1.UseGuards)(manager_only_guard_1.ManagerOnlyGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_company_dto_1.CreateCompaniesDto]),
    __metadata("design:returntype", void 0)
], CompanyController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Kompaniya ma'lumotini yangilash" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Kompaniya ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Kompaniya yangilandi" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Kompaniya topilmadi" }),
    (0, common_1.UseGuards)(manager_only_guard_1.ManagerOnlyGuard),
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_company_dto_1.UpdateCompaniesDto]),
    __metadata("design:returntype", void 0)
], CompanyController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Kompaniya ma'lumotini o'chirish" }),
    (0, swagger_1.ApiParam)({ name: "id", description: "Kompaniya ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Kompaniya o'chirildi" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Kompaniya topilmadi" }),
    (0, common_1.UseGuards)(manager_only_guard_1.ManagerOnlyGuard),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "remove", null);
exports.CompanyController = CompanyController = __decorate([
    (0, swagger_1.ApiTags)("Company - Kompaniyalar"),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)("company"),
    __metadata("design:paramtypes", [company_service_1.CompanyService])
], CompanyController);
//# sourceMappingURL=company.controller.js.map