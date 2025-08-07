import { CreateCompaniesDto } from "./dto/create-company.dto";
import { UpdateCompaniesDto } from "./dto/update-company.dto";
import { PrismaService } from "../prisma/prisma.service";
export declare class CompanyService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createCompanyDto: CreateCompaniesDto): import("generated/prisma").Prisma.Prisma__companiesClient<{
        phone: string;
        id: number;
        name: string;
        created_at: Date;
        address: string;
        license_number: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(): Promise<{
        phone: string;
        id: number;
        name: string;
        created_at: Date;
        address: string;
        license_number: string;
    }[]>;
    findOne(id: number): Promise<{
        branches: {
            phone: string;
            id: number;
            name: string;
            created_at: Date;
            address: string;
            company_id: number;
        }[];
    } & {
        phone: string;
        id: number;
        name: string;
        created_at: Date;
        address: string;
        license_number: string;
    }>;
    update(id: number, updateCompanyDto: UpdateCompaniesDto): import("generated/prisma").Prisma.Prisma__companiesClient<{
        phone: string;
        id: number;
        name: string;
        created_at: Date;
        address: string;
        license_number: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    remove(id: number): Promise<{
        message: string;
        success: boolean;
    }>;
}
