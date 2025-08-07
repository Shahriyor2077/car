import { PrismaService } from '../prisma/prisma.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AdminService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    private generateTokens;
    create(createAdminDto: CreateAdminDto, currentAdminRole: string): Promise<{
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
    login(email: string, password: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    logout(): Promise<{
        message: string;
    }>;
    refreshToken(oldRefreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<{
        full_name: string;
        email: string;
        password: string;
        id: number;
        created_at: Date;
        role: import("generated/prisma").$Enums.AdminRole;
    }[]>;
    findOne(id: number): import("generated/prisma").Prisma.Prisma__adminClient<{
        full_name: string;
        email: string;
        password: string;
        id: number;
        created_at: Date;
        role: import("generated/prisma").$Enums.AdminRole;
    } | null, null, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: number, updateAdminDto: UpdateAdminDto): Promise<{
        full_name: string;
        email: string;
        password: string;
        id: number;
        created_at: Date;
        role: import("generated/prisma").$Enums.AdminRole;
    }>;
    remove(id: number): Promise<{
        full_name: string;
        email: string;
        password: string;
        id: number;
        created_at: Date;
        role: import("generated/prisma").$Enums.AdminRole;
    }>;
}
