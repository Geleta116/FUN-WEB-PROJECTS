import { AuthorityService } from './authority.service';
import { authority } from './authoritySchema/authority.schema';
import { CreateAuthorityDto } from './dto/create-authority.dto';
export declare class AuthorityController {
    private readonly authorityService;
    constructor(authorityService: AuthorityService);
    create(authoritys: CreateAuthorityDto): Promise<authority>;
    findAll(): Promise<authority[]>;
    findOne(id: number): Promise<authority>;
    updateOne(id: number, authority: authority): Promise<authority>;
    deleteOne(id: number): Promise<authority>;
}
