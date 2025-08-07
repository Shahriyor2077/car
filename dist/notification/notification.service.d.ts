import { CreateNotificationsDto } from "./dto/create-notification.dto";
import { UpdateNotificationsDto } from "./dto/update-notification.dto";
import { PrismaService } from "../prisma/prisma.service";
export declare class NotificationService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
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
    findAll(currentUserId?: number, userRole?: string): Promise<({
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
    findOne(id: number, currentUserId?: number, userRole?: string): Promise<{
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
    update(id: number, updateNotificationDto: UpdateNotificationsDto): Promise<{
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
    remove(id: number): Promise<{
        message: string;
        id: number;
        user_id: number;
        created_at: Date;
    }>;
}
