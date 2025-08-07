import { CreateUserDto } from "./create-user.dto";
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    full_name?: string;
    phone?: string;
    email?: string;
    password?: string;
    birthday?: string;
    is_active?: boolean;
}
export {};
