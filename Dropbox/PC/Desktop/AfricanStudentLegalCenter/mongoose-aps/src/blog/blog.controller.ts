import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BlogService } from './blog.service';
import {blog } from './blogSchema/blog.schema';
import { CreateBlogDto } from './dto/create-blog.dto';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post()
  async create(@Body() blogs: CreateBlogDto) {
    
    return await this.blogService.create(blogs);
  }

  @Get()
  async findAll(): Promise<blog[]> {
    return this.blogService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<blog> {
    return this.blogService.findOne(id);
  }

  @Put(':id')
  async updateOne(@Param('id') id: number, @Body() blog: blog): Promise<blog> {
    return this.blogService.updateOne(id, blog);
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: number): Promise<blog> {
    return this.blogService.deleteOne(id);
  }
}


//write a resource called eder with controller, service, schema for mongo, and module in nest 

// write a user authentication and authorization using roles and jwt authentication  in nest js and mongo

//write me a nestjs mongo db chat app using socket io