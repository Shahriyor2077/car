import { CreateCarFeatureDto } from "./dto/create-car_feature.dto";
import { UpdateCarFeatureDto } from "./dto/update-car_feature.dto";
import { PrismaService } from "../prisma/prisma.service";
export declare class CarFeatureService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createCarFeatureDto: CreateCarFeatureDto): Promise<{
        id: number;
        car_id: number;
        feature_id: number;
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
        feature: {
            id: number;
            name: string;
        };
    } & {
        id: number;
        car_id: number;
        feature_id: number;
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
        feature: {
            id: number;
            name: string;
        };
    } & {
        id: number;
        car_id: number;
        feature_id: number;
    }>;
    update(id: number, updateCarFeatureDto: UpdateCarFeatureDto): Promise<{
        id: number;
        car_id: number;
        feature_id: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        car_id: number;
        feature_id: number;
    }>;
}
