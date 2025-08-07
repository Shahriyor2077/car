import { CreateCarImagesDto } from './create-car_image.dto';
declare const UpdateCarImagesDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCarImagesDto>>;
export declare class UpdateCarImagesDto extends UpdateCarImagesDto_base {
    car_id?: number;
    image?: string;
}
export {};
