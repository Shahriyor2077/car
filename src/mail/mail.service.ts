import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendMail(
    user: { email: string; name: string; activation_link?: string },
    type: "user" | "admin" = "user"
  ) {
    const baseUrl = process.env.api_url || "http://localhost:5000";
    const url =
      type === "admin"
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

  async sendResetPasswordEmail(to: string, token: string) {
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
}
