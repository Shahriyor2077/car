import { PrismaService } from '../prisma/prisma.service';
import { CreateBranchesDto } from './dto/create-branch.dto';
import { UpdateBranchesDto } from './dto/update-branch.dto';
export declare class BranchService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
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
    findOne(id: number): Promise<{
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
    update(id: number, updateBranchDto: UpdateBranchesDto): Promise<{
        phone: string;
        id: number;
        name: string;
        created_at: Date;
        address: string;
        company_id: number;
    }>;
    remove(id: number): Promise<{
        phone: string;
        id: number;
        name: string;
        created_at: Date;
        address: string;
        company_id: number;
    }>;
}
