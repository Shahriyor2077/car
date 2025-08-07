import { CreateDamagesDto } from "./dto/create-damage.dto";
import { UpdateDamagesDto } from "./dto/update-damage.dto";
import { PrismaService } from "../prisma/prisma.service";
export declare class DamageService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
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
    findOne(id: number): Promise<{
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
    update(id: number, updateDamageDto: UpdateDamagesDto): Promise<{
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
    remove(id: number): Promise<{
        description: string;
        id: number;
        rental_id: number;
        cost_estimate: string;
        damage_date: Date;
    }>;
}
