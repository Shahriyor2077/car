import { CreateComplaintsDto } from "./create-complaint.dto";
declare const UpdateComplaintsDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateComplaintsDto>>;
export declare class UpdateComplaintsDto extends UpdateComplaintsDto_base {
    user_id?: number;
    message?: string;
    rental_id?: number;
}
export {};
