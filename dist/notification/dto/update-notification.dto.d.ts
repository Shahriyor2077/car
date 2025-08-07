import { CreateNotificationsDto } from "./create-notification.dto";
declare const UpdateNotificationsDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateNotificationsDto>>;
export declare class UpdateNotificationsDto extends UpdateNotificationsDto_base {
    user_id?: number;
    message?: string;
}
export {};
