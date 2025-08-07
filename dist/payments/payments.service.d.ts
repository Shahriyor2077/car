import { UpdatePaymentsDto } from "./dto/update-payment.dto";
import { PrismaService } from "../prisma/prisma.service";
import { CreatePaymentsDto } from "./dto/create-payment.dto";
export declare class PaymentsService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createPaymentDto: CreatePaymentsDto): Promise<{
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
        id: number;
        status: import("generated/prisma").$Enums.PaymentStatus;
        rental_id: number;
        amount: import("generated/prisma/runtime/library").Decimal;
        payment_date: Date;
        payment_method: import("generated/prisma").$Enums.PaymentMethod;
    }>;
    findAll(currentUserId?: number, userRole?: string): Promise<({
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
        id: number;
        status: import("generated/prisma").$Enums.PaymentStatus;
        rental_id: number;
        amount: import("generated/prisma/runtime/library").Decimal;
        payment_date: Date;
        payment_method: import("generated/prisma").$Enums.PaymentMethod;
    })[]>;
    findOne(id: number, currentUserId?: number, userRole?: string): Promise<{
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
        id: number;
        status: import("generated/prisma").$Enums.PaymentStatus;
        rental_id: number;
        amount: import("generated/prisma/runtime/library").Decimal;
        payment_date: Date;
        payment_method: import("generated/prisma").$Enums.PaymentMethod;
    }>;
    update(id: number, updatePaymentDto: UpdatePaymentsDto): Promise<{
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
        id: number;
        status: import("generated/prisma").$Enums.PaymentStatus;
        rental_id: number;
        amount: import("generated/prisma/runtime/library").Decimal;
        payment_date: Date;
        payment_method: import("generated/prisma").$Enums.PaymentMethod;
    }>;
    remove(id: number): Promise<{
        id: number;
        status: import("generated/prisma").$Enums.PaymentStatus;
        rental_id: number;
        amount: import("generated/prisma/runtime/library").Decimal;
        payment_date: Date;
        payment_method: import("generated/prisma").$Enums.PaymentMethod;
    }>;
}
