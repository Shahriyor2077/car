import { BranchService } from "./branch.service";
import { UpdateBranchesDto } from "./dto/update-branch.dto";
import { CreateBranchesDto } from "./dto/create-branch.dto";
export declare class BranchController {
    private readonly branchService;
    constructor(branchService: BranchService);
    create(createBranchDto: CreateBranchesDto): Promise<{
        phone: string;
        id: number;
        name: string;
        created_at: Date;
        address: string;
        company_id: number;
    }>;
    findAll(): Promise<({
        company: {
            phone: string;
            id: number;
            name: string;
            created_at: Date;
            address: string;
            license_number: string;
        };
    } & {
        phone: string;
        id: number;
        name: string;
        created_at: Date;
        address: string;
        company_id: number;
    })[]>;
    findOne(id: string): Promise<{
        company: {
            phone: string;
            id: number;
            name: string;
            created_at: Date;
            address: string;
            license_number: string;
        };
    } & {
        phone: string;
        id: number;
        name: string;
        created_at: Date;
        address: string;
        company_id: number;
    }>;
    update(id: string, updateBranchDto: UpdateBranchesDto): Promise<{
        phone: string;
        id: number;
        name: string;
        created_at: Date;
        address: string;
        company_id: number;
    }>;
    remove(id: string): Promise<{
        phone: string;
        id: number;
        name: string;
        created_at: Date;
        address: string;
        company_id: number;
    }>;
}
