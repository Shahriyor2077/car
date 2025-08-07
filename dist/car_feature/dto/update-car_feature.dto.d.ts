import { CreateCarFeatureDto } from "./create-car_feature.dto";
declare const UpdateCarFeatureDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCarFeatureDto>>;
export declare class UpdateCarFeatureDto extends UpdateCarFeatureDto_base {
    car_id?: number;
    feature_id?: number;
}
export {};
