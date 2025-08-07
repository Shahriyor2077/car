import { CarMaintenanceService } from "./car_maintenance.service";
import { CreateCarMaintenanceDto } from "./dto/create-car_maintenance.dto";
import { UpdateCarMaintenanceDto } from "./dto/update-car_maintenance.dto";
export declare class CarMaintenanceController {
    private readonly carMaintenanceService;
    constructor(carMaintenanceService: CarMaintenanceService);
    create(createCarMaintenanceDto: CreateCarMaintenanceDto): Promise<{
        description: string;
        id: number;
        car_id: number;
        service_date: string;
        cost: import("generated/prisma/runtime/library").Decimal;
    }>;
    findOne(id: string): Promise<{
        car: {
            id: number;
            created_at: Date;
            branch_id: number;
            brand: string;
            model: string;
            year: string;
            color: string;
            mileage: number;
            price_per_day: string;
            is_available: boolean;
        };
    } & {
        description: string;
        id: number;
        car_id: number;
        service_date: string;
        cost: import("generated/prisma/runtime/library").Decimal;
    }>;
    update(id: string, updateCarMaintenanceDto: UpdateCarMaintenanceDto): Promise<{
        description: string;
        id: number;
        car_id: number;
        service_date: string;
        cost: import("generated/prisma/runtime/library").Decimal;
    }>;
    remove(id: string): Promise<{
        description: string;
        id: number;
        car_id: number;
        service_date: string;
        cost: import("generated/prisma/runtime/library").Decimal;
    }>;
    findAll(): Promise<({
        car: {
            id: number;
            created_at: Date;
            branch_id: number;
            brand: string;
            model: string;
            year: string;
            color: string;
            mileage: number;
            price_per_day: string;
            is_available: boolean;
        };
    } & {
        description: string;
        id: number;
        car_id: number;
        service_date: string;
        cost: import("generated/prisma/runtime/library").Decimal;
    })[]>;
}
