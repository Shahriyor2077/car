export declare class CreateRentalsDto {
    user_id: number;
    car_id: number;
    start_date: string;
    end_date: string;
    total_price: number;
    status: "PENDING" | "ACTIVE" | "COMPLETED" | "CANCELLED";
}
