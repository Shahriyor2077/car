import { CreateCarImagesDto } from "./dto/create-car_image.dto";
import { UpdateCarImagesDto } from "./dto/update-car_image.dto";
import { PrismaService } from "../prisma/prisma.service";
export declare class CarImagesService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createCarImageDto: CreateCarImagesDto): Promise<{
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
        id: number;
        car_id: number;
        image: string;
    }>;
    update(id: number, updateCarImageDto: UpdateCarImagesDto): Promise<{
        id: number;
        car_id: number;
        image: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        car_id: number;
        image: string;
    }>;
}
