import { CreateCarDto } from "./create-car.dto";
declare const UpdateCarDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCarDto>>;
export declare class UpdateCarDto extends UpdateCarDto_base {
    branch_id?: number;
    brand?: string;
    model?: string;
    year?: string;
    color?: string;
    mileage?: number;
    price_per_day?: string;
    is_available?: boolean;
}
export {};
