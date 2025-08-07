import { PrismaService } from "../prisma/prisma.service";
import { JwtService } from "@nestjs/jwt";
import { MailService } from "../mail/mail.service";
import { CreateUserDto } from "../user/dto/create-user.dto";
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    private readonly mailService;
    constructor(prisma: PrismaService, jwtService: JwtService, mailService: MailService);
    private generateTokens;
    register(dto: CreateUserDto): Promise<{
        message: string;
        user: {
            full_name: string;
            phone: string;
            email: string;
            birthday: string;
            is_active: boolean;
            id: number;
            activation_link: string | null;
        };
    }>;
    activate(link: string): Promise<{
        message: string;
    }>;
    login(email: string, password: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    logout(): Promise<{
        message: string;
        success: boolean;
    }>;
    refreshToken(oldRefreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
