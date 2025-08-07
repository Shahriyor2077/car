import { CreatePaymentsDto } from "./create-payment.dto";
declare const UpdatePaymentsDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreatePaymentsDto>>;
export declare class UpdatePaymentsDto extends UpdatePaymentsDto_base {
    rental_id?: number;
    amount?: number;
    payment_date?: string;
    payment_method?: "CASH" | "CARD" | "TRANSFER";
}
export {};
