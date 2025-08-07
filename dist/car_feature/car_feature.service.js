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
exports.CarFeatureService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CarFeatureService = class CarFeatureService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createCarFeatureDto) {
        const car = await this.prismaService.car.findUnique({
            where: { id: createCarFeatureDto.car_id },
        });
        if (!car) {
            throw new common_1.BadRequestException("Avtomobil topilmadi");
        }
        const feature = await this.prismaService.feature.findUnique({
            where: { id: createCarFeatureDto.feature_id },
        });
        if (!feature) {
            throw new common_1.BadRequestException("Xususiyat topilmadi");
        }
        return await this.prismaService.car_feature.create({
            data: createCarFeatureDto,
        });
    }
    async findAll() {
        return await this.prismaService.car_feature.findMany({
            include: {
                car: true,
                feature: true,
            },
        });
    }
    async findOne(id) {
        const carFeature = await this.prismaService.car_feature.findUnique({
            where: { id },
            include: {
                car: true,
                feature: true,
            },
        });
        if (!carFeature) {
            throw new common_1.NotFoundException("Car xususiyat topilmadi");
        }
        return carFeature;
    }
    async update(id, updateCarFeatureDto) {
        const existingCarFeature = await this.prismaService.car_feature.findUnique({
            where: { id },
        });
        if (!existingCarFeature) {
            throw new common_1.NotFoundException("Car xususiyat topilmadi");
        }
        if (updateCarFeatureDto.car_id) {
            const car = await this.prismaService.car.findUnique({
                where: { id: updateCarFeatureDto.car_id },
            });
            if (!car) {
                throw new common_1.BadRequestException("Avtomobil topilmadi");
            }
        }
        if (updateCarFeatureDto.feature_id) {
            const feature = await this.prismaService.feature.findUnique({
                where: { id: updateCarFeatureDto.feature_id },
            });
            if (!feature) {
                throw new common_1.BadRequestException("Xususiyat topilmadi");
            }
        }
        return await this.prismaService.car_feature.update({
            where: { id },
            data: updateCarFeatureDto,
        });
    }
    async remove(id) {
        const existingCarFeature = await this.prismaService.car_feature.findUnique({
            where: { id },
        });
        if (!existingCarFeature) {
            throw new common_1.NotFoundException("Car xususiyat topilmadi");
        }
        return await this.prismaService.car_feature.delete({
            where: { id },
        });
    }
};
exports.CarFeatureService = CarFeatureService;
exports.CarFeatureService = CarFeatureService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CarFeatureService);
//# sourceMappingURL=car_feature.service.js.map