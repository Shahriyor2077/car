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
exports.BranchService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let BranchService = class BranchService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createBranchDto) {
        const company = await this.prismaService.companies.findUnique({
            where: { id: createBranchDto.company_id }
        });
        if (!company) {
            throw new common_1.BadRequestException('Kompaniya topilmadi');
        }
        return await this.prismaService.branches.create({
            data: createBranchDto
        });
    }
    async findAll() {
        return await this.prismaService.branches.findMany({
            include: { company: true }
        });
    }
    async findOne(id) {
        const branch = await this.prismaService.branches.findUnique({
            where: { id },
            include: { company: true }
        });
        if (!branch) {
            throw new common_1.NotFoundException('Branch topilmadi');
        }
        return branch;
    }
    async update(id, updateBranchDto) {
        const existingBranch = await this.prismaService.branches.findUnique({
            where: { id }
        });
        if (!existingBranch) {
            throw new common_1.NotFoundException('Branch topilmadi');
        }
        if (updateBranchDto.company_id) {
            const company = await this.prismaService.companies.findUnique({
                where: { id: updateBranchDto.company_id }
            });
            if (!company) {
                throw new common_1.BadRequestException('Kompaniya topilmadi');
            }
        }
        return await this.prismaService.branches.update({
            where: { id },
            data: updateBranchDto
        });
    }
    async remove(id) {
        const existingBranch = await this.prismaService.branches.findUnique({
            where: { id }
        });
        if (!existingBranch) {
            throw new common_1.NotFoundException('Branch topilmadi');
        }
        await this.prismaService.car.deleteMany({
            where: { branch_id: id }
        });
        return await this.prismaService.branches.delete({
            where: { id }
        });
    }
};
exports.BranchService = BranchService;
exports.BranchService = BranchService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BranchService);
//# sourceMappingURL=branch.service.js.map