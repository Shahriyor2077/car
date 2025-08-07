import { DamageService } from "./damage.service";
import { CreateDamagesDto } from "./dto/create-damage.dto";
import { UpdateDamagesDto } from "./dto/update-damage.dto";
export declare class DamageController {
    private readonly damageService;
    constructor(damageService: DamageService);
    create(createDamageDto: CreateDamagesDto): Promise<{
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
        description: string;
        id: number;
        rental_id: number;
        cost_estimate: string;
        damage_date: Date;
    }>;
    findOne(id: string): Promise<{
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
        description: string;
        id: number;
        rental_id: number;
        cost_estimate: string;
        damage_date: Date;
    }>;
    update(id: string, updateDamageDto: UpdateDamagesDto): Promise<{
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
        description: string;
        id: number;
        rental_id: number;
        cost_estimate: string;
        damage_date: Date;
    }>;
    remove(id: string): Promise<{
        description: string;
        id: number;
        rental_id: number;
        cost_estimate: string;
        damage_date: Date;
    }>;
    findAll(): Promise<({
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
        description: string;
        id: number;
        rental_id: number;
        cost_estimate: string;
        damage_date: Date;
    })[]>;
}
