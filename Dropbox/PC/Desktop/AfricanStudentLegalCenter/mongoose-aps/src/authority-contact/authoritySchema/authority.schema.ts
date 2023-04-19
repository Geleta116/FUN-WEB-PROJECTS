import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


export type authorityDocument = HydratedDocument<authority>;

@Schema()
export class authority {
  @Prop({ required: true })
  country : string;

  @Prop({ required: true })
  sector : string;

  @Prop({ required: true })
  phone : string;

  @Prop()
  email : string;

}

export const authoritySchema = SchemaFactory.createForClass(authority);
