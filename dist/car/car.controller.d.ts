import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
export declare class CarController {
    private readonly carService;
    constructor(carService: CarService);
    create(createCarDto: CreateCarDto): Promise<{
        message: string;
        car: {
            branch: {
                phone: string;
                id: number;
                name: string;
                created_at: Date;
                address: string;
                company_id: number;
            };
        } & {
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
    }>;
    findAll(): Promise<({
        branch: {
            phone: string;
            id: number;
            name: string;
            created_at: Date;
            address: string;
            company_id: number;
        };
    } & {
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
    })[]>;
    findByColor(color: string): Promise<({
        car_images: {
            id: number;
            car_id: number;
            image: string;
        }[];
        branch: {
            phone: string;
            id: number;
            name: string;
            created_at: Date;
            address: string;
            company_id: number;
        };
    } & {
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
    })[]>;
    findByYear(year: string): Promise<({
        car_images: {
            id: number;
            car_id: number;
            image: string;
        }[];
        branch: {
            phone: string;
            id: number;
            name: string;
            created_at: Date;
            address: string;
            company_id: number;
        };
    } & {
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
    })[]>;
    findByName(model: string): Promise<({
        car_images: {
            id: number;
            car_id: number;
            image: string;
        }[];
        branch: {
            phone: string;
            id: number;
            name: string;
            created_at: Date;
            address: string;
            company_id: number;
        };
    } & {
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
    })[]>;
    findByPrice(minPrice?: string, maxPrice?: string): Promise<({
        car_images: {
            id: number;
            car_id: number;
            image: string;
        }[];
        branch: {
            phone: string;
            id: number;
            name: string;
            created_at: Date;
            address: string;
            company_id: number;
        };
    } & {
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
    })[]>;
    findByRating(minRating?: string, maxRating?: string): Promise<({
        car_images: {
            id: number;
            car_id: number;
            image: string;
        }[];
        reviews: ({
            user: {
                full_name: string;
                phone: string;
                email: string;
                password: string;
                birthday: string;
                is_active: boolean;
                id: number;
                activation_link: string | null;
            };
        } & {
            id: number;
            user_id: number;
            car_id: number;
            created_at: Date;
            rating: string;
        })[];
        branch: {
            phone: string;
            id: number;
            name: string;
            created_at: Date;
            address: string;
            company_id: number;
        };
    } & {
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
    })[]>;
    findOne(id: string): Promise<{
        branch: {
            phone: string;
            id: number;
            name: string;
            created_at: Date;
            address: string;
            company_id: number;
        };
    } & {
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
    }>;
    update(id: string, updateCarDto: UpdateCarDto): Promise<{
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
    }>;
    remove(id: string): Promise<{
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
    }>;
}
