import { CreateDamagesDto } from "./create-damage.dto";
declare const UpdateDamagesDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateDamagesDto>>;
export declare class UpdateDamagesDto extends UpdateDamagesDto_base {
    rental_id?: number;
    description?: string;
    cost_estimate?: string;
    damage_date?: string;
}
export {};
