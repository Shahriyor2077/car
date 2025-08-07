import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<{
        full_name: string;
        phone: string;
        email: string;
        password: string;
        birthday: string;
        is_active: boolean;
        id: number;
        activation_link: string | null;
    }>;
    findOne(id: string): Promise<{
        full_name: string;
        phone: string;
        email: string;
        password: string;
        birthday: string;
        is_active: boolean;
        id: number;
        activation_link: string | null;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        full_name: string;
        phone: string;
        email: string;
        password: string;
        birthday: string;
        is_active: boolean;
        id: number;
        activation_link: string | null;
    }>;
    remove(id: string): Promise<{
        full_name: string;
        phone: string;
        email: string;
        password: string;
        birthday: string;
        is_active: boolean;
        id: number;
        activation_link: string | null;
    }>;
    findAll(): Promise<{
        full_name: string;
        phone: string;
        email: string;
        password: string;
        birthday: string;
        is_active: boolean;
        id: number;
        activation_link: string | null;
    }[]>;
}
