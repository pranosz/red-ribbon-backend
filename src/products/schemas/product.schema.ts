import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop({ unique: true, required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  category: string;

  @Prop()
  description: string;

  @Prop({ unique: true, required: true })
  code: string;

  @Prop({ required: true })
  status: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);