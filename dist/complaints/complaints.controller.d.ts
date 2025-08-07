import { ComplaintsService } from "./complaints.service";
import { CreateComplaintsDto } from "./dto/create-complaint.dto";
import { UpdateComplaintsDto } from "./dto/update-complaint.dto";
export declare class ComplaintsController {
    private readonly complaintsService;
    constructor(complaintsService: ComplaintsService);
    create(createComplaintDto: CreateComplaintsDto, req: any): Promise<{
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
    findOne(id: string, req: any): Promise<{
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
    update(id: string, updateComplaintDto: UpdateComplaintsDto): Promise<{
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
    remove(id: string): Promise<{
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
}
