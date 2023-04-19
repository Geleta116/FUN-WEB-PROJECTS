import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {  authority } from './authoritySchema/authority.schema';
import { CreateAuthorityDto } from './dto/create-authority.dto';

@Injectable()
export class AuthorityService {
  constructor(@InjectModel('authority') private authorityModel: Model<authority>) {}

  async create(authority: CreateAuthorityDto): Promise<authority> {
    
    return new this.authorityModel(authority).save();
    
    
  }

  async findAll(): Promise<authority[]> {
    return this.authorityModel.find().exec();
  }

  async findOne(id: number): Promise<authority> {
    return this.authorityModel.findOne({ id }).exec();
  }

  async updateOne(id: number, authority: authority): Promise<authority> {
    return this.authorityModel.findOneAndUpdate({ id }, authority, { new: true }).exec();
  }

  async deleteOne(id: number): Promise<authority> {
    return this.authorityModel.findOneAndDelete({ id }).exec();
  }
}
