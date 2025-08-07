import { DocumentsService } from "./documents.service";
import { CreateDocumentsDto } from "./dto/create-document.dto";
import { UpdateDocumentsDto } from "./dto/update-document.dto";
export declare class DocumentsController {
    private readonly documentsService;
    constructor(documentsService: DocumentsService);
    create(createDocumentDto: CreateDocumentsDto, req: any): Promise<{
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
        id: number;
        user_id: number;
        created_at: Date;
        deliver_license: string;
    }>;
    update(id: string, updateDocumentDto: UpdateDocumentsDto): Promise<{
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
    remove(id: string): Promise<{
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
}
