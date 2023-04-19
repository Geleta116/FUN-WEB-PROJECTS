import { Model } from 'mongoose';
import { authority } from './authoritySchema/authority.schema';
import { CreateAuthorityDto } from './dto/create-authority.dto';
export declare class AuthorityService {
    private authorityModel;
    constructor(authorityModel: Model<authority>);
    create(authority: CreateAuthorityDto): Promise<authority>;
    findAll(): Promise<authority[]>;
    findOne(id: number): Promise<authority>;
    updateOne(id: number, authority: authority): Promise<authority>;
    deleteOne(id: number): Promise<authority>;
}
