export declare class CreatePaymentsDto {
    rental_id: number;
    amount: number;
    payment_date: string;
    payment_method: "CASH" | "CARD" | "TRANSFER";
}
