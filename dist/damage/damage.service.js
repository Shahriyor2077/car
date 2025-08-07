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
exports.DamageService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DamageService = class DamageService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createDamageDto) {
        const rental = await this.prismaService.rentals.findUnique({
            where: { id: createDamageDto.rental_id },
        });
        if (!rental) {
            throw new common_1.BadRequestException("Ijara topilmadi");
        }
        return await this.prismaService.damages.create({
            data: {
                ...createDamageDto,
                damage_date: new Date(createDamageDto.damage_date),
            },
            include: { rental: true },
        });
    }
    async findAll() {
        return await this.prismaService.damages.findMany({
            include: { rental: true },
        });
    }
    async findOne(id) {
        const damage = await this.prismaService.damages.findUnique({
            where: { id },
            include: { rental: true },
        });
        if (!damage) {
            throw new common_1.NotFoundException("Zarar topilmadi");
        }
        return damage;
    }
    async update(id, updateDamageDto) {
        const existingDamage = await this.prismaService.damages.findUnique({
            where: { id },
        });
        if (!existingDamage) {
            throw new common_1.NotFoundException("Zarar topilmadi");
        }
        const updateData = { ...updateDamageDto };
        if (updateDamageDto.damage_date) {
            updateData.damage_date = new Date(updateDamageDto.damage_date);
        }
        return await this.prismaService.damages.update({
            where: { id },
            data: updateData,
            include: { rental: true },
        });
    }
    async remove(id) {
        const existingDamage = await this.prismaService.damages.findUnique({
            where: { id },
        });
        if (!existingDamage) {
            throw new common_1.NotFoundException("Zarar topilmadi");
        }
        return await this.prismaService.damages.delete({
            where: { id },
        });
    }
};
exports.DamageService = DamageService;
exports.DamageService = DamageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DamageService);
//# sourceMappingURL=damage.service.js.map