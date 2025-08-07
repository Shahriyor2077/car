import { CompanyService } from "./company.service";
import { CreateCompaniesDto } from "./dto/create-company.dto";
import { UpdateCompaniesDto } from "./dto/update-company.dto";
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    findAll(): Promise<{
        phone: string;
        id: number;
        name: string;
        created_at: Date;
        address: string;
        license_number: string;
    }[]>;
    findOne(id: string): Promise<{
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
    create(createCompanyDto: CreateCompaniesDto): import("generated/prisma").Prisma.Prisma__companiesClient<{
        phone: string;
        id: number;
        name: string;
        created_at: Date;
        address: string;
        license_number: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    update(id: string, updateCompanyDto: UpdateCompaniesDto): import("generated/prisma").Prisma.Prisma__companiesClient<{
        phone: string;
        id: number;
        name: string;
        created_at: Date;
        address: string;
        license_number: string;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    remove(id: string): Promise<{
        message: string;
        success: boolean;
    }>;
}
