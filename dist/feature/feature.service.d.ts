import { CreateFeatureDto } from "./dto/create-feature.dto";
import { UpdateFeatureDto } from "./dto/update-feature.dto";
import { PrismaService } from "../prisma/prisma.service";
export declare class FeatureService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createFeatureDto: CreateFeatureDto): Promise<{
        id: number;
        name: string;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
    }>;
    update(id: number, updateFeatureDto: UpdateFeatureDto): Promise<{
        id: number;
        name: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
    }>;
}
