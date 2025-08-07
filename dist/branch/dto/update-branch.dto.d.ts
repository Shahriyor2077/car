import { CreateBranchesDto } from "./create-branch.dto";
declare const UpdateBranchesDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateBranchesDto>>;
export declare class UpdateBranchesDto extends UpdateBranchesDto_base {
    name?: string;
    address?: string;
    company_id?: number;
    phone?: string;
}
export {};
