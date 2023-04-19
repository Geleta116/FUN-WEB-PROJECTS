import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


export type blogDocument = HydratedDocument<blog>;

@Schema()
export class blog {
  @Prop({ required: true })
  title : string;

  @Prop({ required: true })
  content : string;

  @Prop({ required: true })
  publisher : string;

  @Prop([String])
  tags : string[];

}

export const blogSchema = SchemaFactory.createForClass(blog);
