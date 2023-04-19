import { authorityService } from './authority.service';
import { authority } from './authoritySchema/authority.schema';
import { CreateauthorityDto } from './dto/create-authority.dto';
export declare class authorityController {
    private readonly authorityService;
    constructor(authorityService: authorityService);
    create(authoritys: CreateauthorityDto): Promise<any>;
    findAll(): Promise<authority[]>;
    findOne(id: number): Promise<authority>;
    updateOne(id: number, authority: authority): Promise<authority>;
    deleteOne(id: number): Promise<authority>;
}
