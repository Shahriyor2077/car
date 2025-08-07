import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Request, Response } from 'express';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    register(createAdminDto: CreateAdminDto, req: any): Promise<{
        message: string;
        admin: {
            full_name: string;
            email: string;
            password: string;
            id: number;
            created_at: Date;
            role: import("generated/prisma").$Enums.AdminRole;
        };
    }>;
    login(body: {
        email: string;
        password: string;
    }, res: Response): Promise<{
        message: string;
        success: boolean;
        accessToken: string;
        refreshToken: string;
    }>;
    refresh(req: Request, res: Response): Promise<{
        message: string;
        success: boolean;
        accessToken: string;
        refreshToken: string;
    }>;
    logout(res: Response): Promise<{
        message: string;
        success: boolean;
    }>;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<{
        full_name: string;
        email: string;
        password: string;
        id: number;
        created_at: Date;
        role: import("generated/prisma").$Enums.AdminRole;
    }[]>;
    findOne(id: string): import("generated/prisma").Prisma.Prisma__adminClient<{
        full_name: string;
        email: string;
        password: string;
        id: number;
        created_at: Date;
        role: import("generated/prisma").$Enums.AdminRole;
    } | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: string, updateAdminDto: UpdateAdminDto): Promise<{
        full_name: string;
        email: string;
        password: string;
        id: number;
        created_at: Date;
        role: import("generated/prisma").$Enums.AdminRole;
    }>;
    remove(id: string): Promise<{
        full_name: string;
        email: string;
        password: string;
        id: number;
        created_at: Date;
        role: import("generated/prisma").$Enums.AdminRole;
    }>;
}
