import { CreateCarMaintenanceDto } from "./dto/create-car_maintenance.dto";
import { UpdateCarMaintenanceDto } from "./dto/update-car_maintenance.dto";
import { PrismaService } from "../prisma/prisma.service";
export declare class CarMaintenanceService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createCarMaintenanceDto: CreateCarMaintenanceDto): Promise<{
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
    findOne(id: number): Promise<{
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
    update(id: number, updateCarMaintenanceDto: UpdateCarMaintenanceDto): Promise<{
        description: string;
        id: number;
        car_id: number;
        service_date: string;
        cost: import("generated/prisma/runtime/library").Decimal;
    }>;
    remove(id: number): Promise<{
        description: string;
        id: number;
        car_id: number;
        service_date: string;
        cost: import("generated/prisma/runtime/library").Decimal;
    }>;
}
