import { CreateDocumentsDto } from "./create-document.dto";
declare const UpdateDocumentsDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateDocumentsDto>>;
export declare class UpdateDocumentsDto extends UpdateDocumentsDto_base {
    user_id?: number;
    deliver_license?: string;
}
export {};
