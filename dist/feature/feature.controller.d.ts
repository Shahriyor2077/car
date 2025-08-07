import { FeatureService } from "./feature.service";
import { CreateFeatureDto } from "./dto/create-feature.dto";
import { UpdateFeatureDto } from "./dto/update-feature.dto";
export declare class FeatureController {
    private readonly featureService;
    constructor(featureService: FeatureService);
    create(createFeatureDto: CreateFeatureDto): Promise<{
        id: number;
        name: string;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        name: string;
    }>;
    update(id: string, updateFeatureDto: UpdateFeatureDto): Promise<{
        id: number;
        name: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
    }>;
}
