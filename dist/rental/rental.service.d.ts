import { CreateRentalsDto } from "./dto/create-rental.dto";
import { PrismaService } from "../prisma/prisma.service";
import { UpdateRentalsDto } from "./dto/update-rental.dto";
export declare class RentalService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createRentalDto: CreateRentalsDto, userId: number): Promise<{
        car: {
            id: number;
            created_at: Date;
            branch_id: number;
            brand: string;
            model: string;
            year: string;
            color: string;
            mileage: number;
            price_per_day: string;
            is_available: boolean;
        };
        user: {
            full_name: string;
            phone: string;
            email: string;
            password: string;
            birthday: string;
            is_active: boolean;
            id: number;
            activation_link: string | null;
        };
    } & {
        id: number;
        user_id: number;
        car_id: number;
        start_date: string;
        end_date: string;
        total_price: import("generated/prisma/runtime/library").Decimal;
        status: import("generated/prisma").$Enums.RentalStatus;
        created_at: Date;
    }>;
    findAll(currentUserId?: number, userRole?: string): Promise<({
        car: {
            id: number;
            created_at: Date;
            branch_id: number;
            brand: string;
            model: string;
            year: string;
            color: string;
            mileage: number;
            price_per_day: string;
            is_available: boolean;
        };
        user: {
            full_name: string;
            phone: string;
            email: string;
            password: string;
            birthday: string;
            is_active: boolean;
            id: number;
            activation_link: string | null;
        };
    } & {
        id: number;
        user_id: number;
        car_id: number;
        start_date: string;
        end_date: string;
        total_price: import("generated/prisma/runtime/library").Decimal;
        status: import("generated/prisma").$Enums.RentalStatus;
        created_at: Date;
    })[]>;
    findByUserId(userId: number): Promise<({
        car: {
            id: number;
            created_at: Date;
            branch_id: number;
            brand: string;
            model: string;
            year: string;
            color: string;
            mileage: number;
            price_per_day: string;
            is_available: boolean;
        };
        user: {
            full_name: string;
            phone: string;
            email: string;
            password: string;
            birthday: string;
            is_active: boolean;
            id: number;
            activation_link: string | null;
        };
    } & {
        id: number;
        user_id: number;
        car_id: number;
        start_date: string;
        end_date: string;
        total_price: import("generated/prisma/runtime/library").Decimal;
        status: import("generated/prisma").$Enums.RentalStatus;
        created_at: Date;
    })[]>;
    findOne(id: number, currentUserId?: number, userRole?: string): Promise<{
        car: {
            id: number;
            created_at: Date;
            branch_id: number;
            brand: string;
            model: string;
            year: string;
            color: string;
            mileage: number;
            price_per_day: string;
            is_available: boolean;
        };
        user: {
            full_name: string;
            phone: string;
            email: string;
            password: string;
            birthday: string;
            is_active: boolean;
            id: number;
            activation_link: string | null;
        };
    } & {
        id: number;
        user_id: number;
        car_id: number;
        start_date: string;
        end_date: string;
        total_price: import("generated/prisma/runtime/library").Decimal;
        status: import("generated/prisma").$Enums.RentalStatus;
        created_at: Date;
    }>;
    update(id: number, updateRentalDto: UpdateRentalsDto, userRole?: string): Promise<{
        car: {
            id: number;
            created_at: Date;
            branch_id: number;
            brand: string;
            model: string;
            year: string;
            color: string;
            mileage: number;
            price_per_day: string;
            is_available: boolean;
        };
        user: {
            full_name: string;
            phone: string;
            email: string;
            password: string;
            birthday: string;
            is_active: boolean;
            id: number;
            activation_link: string | null;
        };
    } & {
        id: number;
        user_id: number;
        car_id: number;
        start_date: string;
        end_date: string;
        total_price: import("generated/prisma/runtime/library").Decimal;
        status: import("generated/prisma").$Enums.RentalStatus;
        created_at: Date;
    }>;
    remove(id: number, userRole?: string): Promise<{
        id: number;
        user_id: number;
        car_id: number;
        start_date: string;
        end_date: string;
        total_price: import("generated/prisma/runtime/library").Decimal;
        status: import("generated/prisma").$Enums.RentalStatus;
        created_at: Date;
    }>;
}
