import { CreateCarMaintenanceDto } from "./create-car_maintenance.dto";
declare const UpdateCarMaintenanceDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCarMaintenanceDto>>;
export declare class UpdateCarMaintenanceDto extends UpdateCarMaintenanceDto_base {
    car_id?: number;
    service_date?: string;
    description?: string;
    cost?: number;
}
export {};
