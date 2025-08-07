import { MailerService } from "@nestjs-modules/mailer";
export declare class MailService {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    sendMail(user: {
        email: string;
        name: string;
        activation_link?: string;
    }, type?: "user" | "admin"): Promise<void>;
    sendResetPasswordEmail(to: string, token: string): Promise<void>;
}
