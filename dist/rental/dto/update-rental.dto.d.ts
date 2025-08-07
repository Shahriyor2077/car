import { CreateRentalsDto } from "./create-rental.dto";
declare const UpdateRentalsDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateRentalsDto>>;
export declare class UpdateRentalsDto extends UpdateRentalsDto_base {
    user_id?: number;
    car_id?: number;
    start_date?: string;
    end_date?: string;
    total_price?: number;
    status?: "PENDING" | "ACTIVE" | "COMPLETED" | "CANCELLED";
}
export {};
