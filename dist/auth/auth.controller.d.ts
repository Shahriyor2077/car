import { AuthService } from "./auth.service";
import { CreateUserDto } from "../user/dto/create-user.dto";
import { LoginDto } from "../user/dto/login.dto";
import { Request, Response } from "express";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
    login(dto: LoginDto, res: Response): Promise<{
        message: string;
        success: boolean;
        accessToken: string;
        refreshToken: string;
    }>;
    refresh(req: Request, body: any, res: Response): Promise<{
        message: string;
        success: boolean;
        accessToken: string;
        refreshToken: string;
    }>;
    logout(res: Response): Promise<{
        message: string;
        success: boolean;
    }>;
}
