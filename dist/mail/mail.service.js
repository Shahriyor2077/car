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
exports.MailService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
let MailService = class MailService {
    mailerService;
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    async sendMail(user, type = "user") {
        const baseUrl = process.env.api_url || "http://localhost:5000";
        const url = type === "admin"
            ? `${baseUrl}/api/admin/activate?link=${user.activation_link}`
            : `${baseUrl}/api/auth/activate?link=${user.activation_link}`;
        await this.mailerService.sendMail({
            to: user.email,
            subject: "Welcome to App!",
            template: "confirmation",
            context: {
                username: user.name,
                url,
            },
        });
    }
    async sendResetPasswordEmail(to, token) {
        const resetLink = `http://localhost:5000/auth/reset-password?token=${token}`;
        await this.mailerService.sendMail({
            to,
            subject: "Parolni tiklash",
            template: "reset-password",
            context: {
                url: resetLink,
            },
        });
    }
};
exports.MailService = MailService;
exports.MailService = MailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], MailService);
//# sourceMappingURL=mail.service.js.map