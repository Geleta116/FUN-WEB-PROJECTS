import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AuthorityService } from './authority.service';
import {authority } from './authoritySchema/authority.schema';
import { CreateAuthorityDto } from './dto/create-authority.dto';

@Controller('authority')
export class AuthorityController {
  constructor(private readonly authorityService: AuthorityService) {}

  @Post()
  async create(@Body() authoritys: CreateAuthorityDto) {
    
    return await this.authorityService.create(authoritys);
  }

  @Get()
  async findAll(): Promise<authority[]> {
    return this.authorityService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<authority> {
    return this.authorityService.findOne(id);
  }

  @Put(':id')
  async updateOne(@Param('id') id: number, @Body() authority: authority): Promise<authority> {
    return this.authorityService.updateOne(id, authority);
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: number): Promise<authority> {
    return this.authorityService.deleteOne(id);
  }
}


//write a resource called eder with controller, service, schema for mongo, and module in nest 

// write a user authentication and authorization using roles and jwt authentication  in nest js and mongo

//write me a nestjs mongo db chat app using socket io