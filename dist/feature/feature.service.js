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
exports.FeatureService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let FeatureService = class FeatureService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createFeatureDto) {
        return await this.prismaService.feature.create({
            data: createFeatureDto,
        });
    }
    async findAll() {
        return await this.prismaService.feature.findMany();
    }
    async findOne(id) {
        const feature = await this.prismaService.feature.findUnique({
            where: { id },
        });
        if (!feature) {
            throw new common_1.NotFoundException("Xususiyat topilmadi");
        }
        return feature;
    }
    async update(id, updateFeatureDto) {
        const existingFeature = await this.prismaService.feature.findUnique({
            where: { id },
        });
        if (!existingFeature) {
            throw new common_1.NotFoundException("Xususiyat topilmadi");
        }
        return await this.prismaService.feature.update({
            where: { id },
            data: updateFeatureDto,
        });
    }
    async remove(id) {
        const existingFeature = await this.prismaService.feature.findUnique({
            where: { id },
            include: { car_feature: true },
        });
        if (!existingFeature) {
            throw new common_1.NotFoundException("Xususiyat topilmadi");
        }
        if (existingFeature.car_feature.length > 0) {
            throw new common_1.BadRequestException("Bu xususiyat carlarda ishlatilgan. Ochirish mumkin emas");
        }
        return await this.prismaService.feature.delete({
            where: { id },
        });
    }
};
exports.FeatureService = FeatureService;
exports.FeatureService = FeatureService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FeatureService);
//# sourceMappingURL=feature.service.js.map