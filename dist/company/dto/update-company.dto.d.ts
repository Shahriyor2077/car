import { CreateCompaniesDto } from "./create-company.dto";
declare const UpdateCompaniesDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCompaniesDto>>;
export declare class UpdateCompaniesDto extends UpdateCompaniesDto_base {
    name?: string;
    address?: string;
    phone?: string;
    license_number?: string;
}
export {};
