import { UpdateUserDto } from "./dto/update-user.dto";
import { PrismaService } from "../prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
export declare class UserService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
        full_name: string;
        phone: string;
        email: string;
        password: string;
        birthday: string;
        is_active: boolean;
        id: number;
        activation_link: string | null;
    }>;
    findAll(): Promise<{
        full_name: string;
        phone: string;
        email: string;
        password: string;
        birthday: string;
        is_active: boolean;
        id: number;
        activation_link: string | null;
    }[]>;
    findOne(id: number): Promise<{
        full_name: string;
        phone: string;
        email: string;
        password: string;
        birthday: string;
        is_active: boolean;
        id: number;
        activation_link: string | null;
    }>;
    findByEmail(email: string): Promise<{
        full_name: string;
        phone: string;
        email: string;
        password: string;
        birthday: string;
        is_active: boolean;
        id: number;
        activation_link: string | null;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        full_name: string;
        phone: string;
        email: string;
        password: string;
        birthday: string;
        is_active: boolean;
        id: number;
        activation_link: string | null;
    }>;
    remove(id: number): Promise<{
        full_name: string;
        phone: string;
        email: string;
        password: string;
        birthday: string;
        is_active: boolean;
        id: number;
        activation_link: string | null;
    }>;
}
