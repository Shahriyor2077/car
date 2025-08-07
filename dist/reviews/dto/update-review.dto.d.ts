import { CreateReviewsDto } from "./create-review.dto";
declare const UpdateReviewsDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateReviewsDto>>;
export declare class UpdateReviewsDto extends UpdateReviewsDto_base {
    user_id?: number;
    car_id?: number;
    comment?: string;
    rating?: string;
}
export {};
