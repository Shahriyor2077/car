import { CreateComplaintsDto } from "./dto/create-complaint.dto";
import { UpdateComplaintsDto } from "./dto/update-complaint.dto";
import { PrismaService } from "../prisma/prisma.service";
export declare class ComplaintsService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createComplaintDto: CreateComplaintsDto, currentUserId?: number): Promise<{
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
        rental: {
            id: number;
            user_id: number;
            car_id: number;
            start_date: string;
            end_date: string;
            total_price: import("generated/prisma/runtime/library").Decimal;
            status: import("generated/prisma").$Enums.RentalStatus;
            created_at: Date;
        };
    } & {
        message: string;
        id: number;
        user_id: number;
        created_at: Date;
        rental_id: number;
    }>;
    findAll(): Promise<({
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
        rental: {
            id: number;
            user_id: number;
            car_id: number;
            start_date: string;
            end_date: string;
            total_price: import("generated/prisma/runtime/library").Decimal;
            status: import("generated/prisma").$Enums.RentalStatus;
            created_at: Date;
        };
    } & {
        message: string;
        id: number;
        user_id: number;
        created_at: Date;
        rental_id: number;
    })[]>;
    findOne(id: number, currentUserId?: number, userRole?: string): Promise<{
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
        rental: {
            id: number;
            user_id: number;
            car_id: number;
            start_date: string;
            end_date: string;
            total_price: import("generated/prisma/runtime/library").Decimal;
            status: import("generated/prisma").$Enums.RentalStatus;
            created_at: Date;
        };
    } & {
        message: string;
        id: number;
        user_id: number;
        created_at: Date;
        rental_id: number;
    }>;
    update(id: number, updateComplaintDto: UpdateComplaintsDto): Promise<{
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
        rental: {
            id: number;
            user_id: number;
            car_id: number;
            start_date: string;
            end_date: string;
            total_price: import("generated/prisma/runtime/library").Decimal;
            status: import("generated/prisma").$Enums.RentalStatus;
            created_at: Date;
        };
    } & {
        message: string;
        id: number;
        user_id: number;
        created_at: Date;
        rental_id: number;
    }>;
    remove(id: number): Promise<{
        message: string;
        id: number;
        user_id: number;
        created_at: Date;
        rental_id: number;
    }>;
}
