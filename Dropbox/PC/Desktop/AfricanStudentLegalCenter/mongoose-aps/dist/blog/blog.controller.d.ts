import { BlogService } from './blog.service';
import { blog } from './blogSchema/blog.schema';
import { CreateBlogDto } from './dto/create-blog.dto';
export declare class BlogController {
    private readonly blogService;
    constructor(blogService: BlogService);
    create(blogs: CreateBlogDto): Promise<blog>;
    findAll(): Promise<blog[]>;
    findOne(id: number): Promise<blog>;
    updateOne(id: number, blog: blog): Promise<blog>;
    deleteOne(id: number): Promise<blog>;
}
