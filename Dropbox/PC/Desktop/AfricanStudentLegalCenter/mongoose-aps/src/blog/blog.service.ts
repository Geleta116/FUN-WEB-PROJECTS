import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {  blog } from './blogSchema/blog.schema';
import { CreateBlogDto } from './dto/create-blog.dto';

@Injectable()
export class BlogService {
  constructor(@InjectModel('blog') private blogModel: Model<blog>) {}

  async create(blog: CreateBlogDto): Promise<blog> {
    
    return new this.blogModel(blog).save();
    
    
  }

  async findAll(): Promise<blog[]> {
    return this.blogModel.find().exec();
  }

  async findOne(id: number): Promise<blog> {
    return this.blogModel.findOne({ id }).exec();
  }

  async updateOne(id: number, blog: blog): Promise<blog> {
    return this.blogModel.findOneAndUpdate({ id }, blog, { new: true }).exec();
  }

  async deleteOne(id: number): Promise<blog> {
    return this.blogModel.findOneAndDelete({ id }).exec();
  }
}
