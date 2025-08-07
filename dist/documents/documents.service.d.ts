import { CreateDocumentsDto } from "./dto/create-document.dto";
import { UpdateDocumentsDto } from "./dto/update-document.dto";
import { PrismaService } from "../prisma/prisma.service";
export declare class DocumentsService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createDocumentDto: CreateDocumentsDto, currentUserId?: number): Promise<{
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
        created_at: Date;
        deliver_license: string;
    }>;
    findAll(): Promise<({
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
        created_at: Date;
        deliver_license: string;
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
        id: number;
        user_id: number;
        created_at: Date;
        deliver_license: string;
    }>;
    update(id: number, updateDocumentDto: UpdateDocumentsDto): Promise<{
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
        created_at: Date;
        deliver_license: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        user_id: number;
        created_at: Date;
        deliver_license: string;
    }>;
}
