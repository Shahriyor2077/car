import { ReviewsService } from "./reviews.service";
import { CreateReviewsDto } from "./dto/create-review.dto";
import { UpdateReviewsDto } from "./dto/update-review.dto";
export declare class ReviewsController {
    private readonly reviewsService;
    constructor(reviewsService: ReviewsService);
    create(createReviewDto: CreateReviewsDto, req: any): Promise<{
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
    }>;
    findOne(id: string, req: any): Promise<{
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
    }>;
    update(id: string, updateReviewDto: UpdateReviewsDto): Promise<{
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
    }>;
    remove(id: string): Promise<{
        id: number;
        user_id: number;
        car_id: number;
        created_at: Date;
        rating: string;
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
    })[]>;
}
