import { Model } from 'mongoose';
import { blog } from './blogSchema/blog.schema';
import { CreateBlogDto } from './dto/create-blog.dto';
export declare class BlogService {
    private blogModel;
    constructor(blogModel: Model<blog>);
    create(blog: CreateBlogDto): Promise<blog>;
    findAll(): Promise<blog[]>;
    findOne(id: number): Promise<blog>;
    updateOne(id: number, blog: blog): Promise<blog>;
    deleteOne(id: number): Promise<blog>;
}
