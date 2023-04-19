import { CreateAuthorityDto } from './dto/create-authority.dto';
import { UpdateAuthorityDto } from './dto/update-authority.dto';
export declare class AuthorityService {
    create(createAuthorityDto: CreateAuthorityDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAuthorityDto: UpdateAuthorityDto): string;
    remove(id: number): string;
}
