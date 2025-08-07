import { CarFeatureService } from "./car_feature.service";
import { CreateCarFeatureDto } from "./dto/create-car_feature.dto";
import { UpdateCarFeatureDto } from "./dto/update-car_feature.dto";
export declare class CarFeatureController {
    private readonly carFeatureService;
    constructor(carFeatureService: CarFeatureService);
    create(createCarFeatureDto: CreateCarFeatureDto): Promise<{
        id: number;
        car_id: number;
        feature_id: number;
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
        feature: {
            id: number;
            name: string;
        };
    } & {
        id: number;
        car_id: number;
        feature_id: number;
    }>;
    update(id: string, updateCarFeatureDto: UpdateCarFeatureDto): Promise<{
        id: number;
        car_id: number;
        feature_id: number;
    }>;
    remove(id: string): Promise<{
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
}
