import { PaymentsService } from "./payments.service";
import { UpdatePaymentsDto } from "./dto/update-payment.dto";
import { CreatePaymentsDto } from "./dto/create-payment.dto";
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
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
    findOne(id: string, req: any): Promise<{
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
    update(id: string, updatePaymentDto: UpdatePaymentsDto): Promise<{
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
    remove(id: string): Promise<{
        id: number;
        status: import("generated/prisma").$Enums.PaymentStatus;
        rental_id: number;
        amount: import("generated/prisma/runtime/library").Decimal;
        payment_date: Date;
        payment_method: import("generated/prisma").$Enums.PaymentMethod;
    }>;
    findAll(req: any): Promise<({
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
}
