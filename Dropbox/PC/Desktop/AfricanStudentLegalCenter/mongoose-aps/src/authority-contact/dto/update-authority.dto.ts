import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthorityDto } from './create-authority.dto';

export class UpdateAuthorityDto extends PartialType(CreateAuthorityDto) {}
