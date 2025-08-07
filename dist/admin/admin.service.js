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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
let AdminService = class AdminService {
    prisma;
    jwtService;
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    generateTokens(payload) {
        const accessToken = this.jwtService.sign(payload, { expiresIn: '3d' });
        const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });
        return { accessToken, refreshToken };
    }
    async create(createAdminDto, currentAdminRole) {
        if (currentAdminRole !== 'MANAGER') {
            throw new common_1.ForbiddenException('Faqat manager admin qo\'sha oladi');
        }
        const adminExists = await this.prisma.admin.findUnique({
            where: { email: createAdminDto.email }
        });
        if (adminExists) {
            throw new common_1.ForbiddenException('Bu email allaqachon ro\'yxatdan o\'tgan');
        }
        const hashedPassword = await bcrypt.hash(createAdminDto.password, 10);
        const admin = await this.prisma.admin.create({
            data: {
                full_name: createAdminDto.full_name,
                email: createAdminDto.email,
                password: hashedPassword,
                role: createAdminDto.role,
            },
        });
        return {
            message: 'Admin muvaffaqiyatli yaratildi',
            admin,
        };
    }
    async login(email, password) {
        const admin = await this.prisma.admin.findUnique({ where: { email } });
        if (!admin) {
            throw new common_1.UnauthorizedException('Email yoki parol noto\'g\'ri');
        }
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            throw new common_1.UnauthorizedException('Email yoki parol noto\'g\'ri');
        }
        const payload = {
            sub: admin.id,
            email: admin.email,
            role: admin.role || 'ADMIN'
        };
        return this.generateTokens(payload);
    }
    async logout() {
        return { message: 'Logout muvaffaqiyatli' };
    }
    async refreshToken(oldRefreshToken) {
        if (!oldRefreshToken) {
            throw new common_1.UnauthorizedException('Refresh token topilmadi');
        }
        let payload;
        try {
            payload = this.jwtService.verify(oldRefreshToken);
        }
        catch (error) {
            throw new common_1.UnauthorizedException("Refresh token noto'g'ri yoki eskirgan");
        }
        const admin = await this.prisma.admin.findUnique({ where: { id: payload.sub } });
        if (!admin) {
            throw new common_1.UnauthorizedException('Admin topilmadi');
        }
        const newPayload = { sub: admin.id, email: admin.email, role: admin.role };
        return this.generateTokens(newPayload);
    }
    findAll() {
        return this.prisma.admin.findMany();
    }
    findOne(id) {
        return this.prisma.admin.findUnique({ where: { id } });
    }
    async update(id, updateAdminDto) {
        const existing = await this.prisma.admin.findUnique({ where: { id } });
        if (!existing)
            throw new common_1.NotFoundException('Admin not found');
        return this.prisma.admin.update({
            where: { id },
            data: updateAdminDto,
        });
    }
    async remove(id) {
        const existing = await this.prisma.admin.findUnique({ where: { id } });
        if (!existing)
            throw new common_1.NotFoundException('Admin not found');
        return this.prisma.admin.delete({ where: { id } });
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AdminService);
//# sourceMappingURL=admin.service.js.map