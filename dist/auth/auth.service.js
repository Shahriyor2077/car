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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const prisma_service_1 = require("../prisma/prisma.service");
const jwt_1 = require("@nestjs/jwt");
const mail_service_1 = require("../mail/mail.service");
const uuid_1 = require("uuid");
let AuthService = class AuthService {
    prisma;
    jwtService;
    mailService;
    constructor(prisma, jwtService, mailService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
        this.mailService = mailService;
    }
    generateTokens(payload) {
        const accessToken = this.jwtService.sign(payload, { expiresIn: "3d" });
        const refreshToken = this.jwtService.sign(payload, { expiresIn: "7d" });
        return { accessToken, refreshToken };
    }
    async register(dto) {
        const userExists = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });
        if (userExists) {
            throw new common_1.ForbiddenException("Bu email allaqachon ro'yxatdan o'tgan");
        }
        const hashedPassword = await bcrypt.hash(dto.password, 10);
        const activation_link = (0, uuid_1.v4)();
        const user = await this.prisma.user.create({
            data: {
                ...dto,
                password: hashedPassword,
                activation_link,
                is_active: false,
            },
        });
        try {
            await this.mailService.sendMail({
                email: user.email,
                name: user.full_name,
                activation_link: activation_link,
            }, "user");
        }
        catch (error) {
            console.log("Mail yuborishda xatolik:", error.message);
        }
        const { password, ...userWithoutPassword } = user;
        return {
            message: "Foydalanuvchi muvaffaqiyatli yaratildi. Emailingizni tasdiqlang.",
            user: userWithoutPassword,
        };
    }
    async activate(link) {
        const user = await this.prisma.user.findFirst({
            where: { activation_link: link },
        });
        if (!user)
            throw new common_1.NotFoundException("Activation link notogri yoki eskirgan");
        if (user.is_active) {
            return { message: "Email allaqachon tasdiqlangan!" };
        }
        await this.prisma.user.update({
            where: { id: user.id },
            data: { is_active: true, activation_link: null },
        });
        return { message: "Email muvaffaqiyatli tasdiqlandi!" };
    }
    async login(email, password) {
        const user = await this.prisma.user.findUnique({ where: { email } });
        if (!user) {
            throw new common_1.UnauthorizedException("Email yoki parol notogri");
        }
        if (!user.is_active) {
            throw new common_1.ForbiddenException("Email tasdiqlanmagan!");
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new common_1.UnauthorizedException("Email yoki parol notogri");
        }
        const payload = {
            sub: user.id,
            email: user.email,
            role: "USER",
        };
        return this.generateTokens(payload);
    }
    async logout() {
        return {
            message: "Logout muvaffaqiyatli",
            success: true,
        };
    }
    async refreshToken(oldRefreshToken) {
        if (!oldRefreshToken) {
            throw new common_1.UnauthorizedException("Refresh token topilmadi");
        }
        let payload;
        try {
            payload = this.jwtService.verify(oldRefreshToken);
        }
        catch (error) {
            throw new common_1.UnauthorizedException("Refresh token notogri yoki eskirgan");
        }
        const user = await this.prisma.user.findUnique({
            where: { id: payload.sub },
        });
        if (!user) {
            throw new common_1.UnauthorizedException("Foydalanuvchi topilmadi");
        }
        const newPayload = { sub: user.id, email: user.email };
        return this.generateTokens(newPayload);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        mail_service_1.MailService])
], AuthService);
//# sourceMappingURL=auth.service.js.map