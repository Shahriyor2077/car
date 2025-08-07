import { NotificationService } from "./notification.service";
import { CreateNotificationsDto } from "./dto/create-notification.dto";
import { UpdateNotificationsDto } from "./dto/update-notification.dto";
export declare class NotificationController {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    create(createNotificationDto: CreateNotificationsDto): Promise<{
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
        message: string;
        id: number;
        user_id: number;
        created_at: Date;
    }>;
    findOne(id: string, req: any): Promise<{
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
        message: string;
        id: number;
        user_id: number;
        created_at: Date;
    }>;
    update(id: string, updateNotificationDto: UpdateNotificationsDto): Promise<{
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
        message: string;
        id: number;
        user_id: number;
        created_at: Date;
    }>;
    remove(id: string): Promise<{
        message: string;
        id: number;
        user_id: number;
        created_at: Date;
    }>;
    findAll(req: any): Promise<({
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
        message: string;
        id: number;
        user_id: number;
        created_at: Date;
    })[]>;
}
