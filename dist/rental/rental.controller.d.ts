import { RentalService } from "./rental.service";
import { CreateRentalsDto } from "./dto/create-rental.dto";
import { UpdateRentalsDto } from "./dto/update-rental.dto";
export declare class RentalController {
    private readonly rentalService;
    constructor(rentalService: RentalService);
    create(createRentalDto: CreateRentalsDto, req: any): Promise<{
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
    findOne(id: string, req: any): Promise<{
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
    findAll(req: any): Promise<({
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
    update(id: string, updateRentalDto: UpdateRentalsDto, req: any): Promise<{
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
    remove(id: string, req: any): Promise<{
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
