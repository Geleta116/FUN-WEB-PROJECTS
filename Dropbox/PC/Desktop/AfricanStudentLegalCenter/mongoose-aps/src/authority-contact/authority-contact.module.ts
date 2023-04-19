import { Module } from '@nestjs/common';
import { AuthorityService } from './authority.service';
import { AuthorityController } from './authority.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { authoritySchema } from './authoritySchema/authority.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'authority', schema: authoritySchema }]),
  ],
  controllers: [AuthorityController],
  providers: [AuthorityService]
})
export class AuthorityModule {}
