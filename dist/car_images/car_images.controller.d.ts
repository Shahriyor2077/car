import { CarImagesService } from "./car_images.service";
import { CreateCarImagesDto } from "./dto/create-car_image.dto";
import { UpdateCarImagesDto } from "./dto/update-car_image.dto";
export declare class CarImagesController {
    private readonly carImagesService;
    constructor(carImagesService: CarImagesService);
    create(createCarImageDto: CreateCarImagesDto): Promise<{
        id: number;
        car_id: number;
        image: string;
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
        id: number;
        car_id: number;
        image: string;
    }>;
    update(id: string, updateCarImageDto: UpdateCarImagesDto): Promise<{
        id: number;
        car_id: number;
        image: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        car_id: number;
        image: string;
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
        id: number;
        car_id: number;
        image: string;
    })[]>;
}
