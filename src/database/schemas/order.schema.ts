import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema({ collection: "order" })
export class Order {

  @Prop({ required: true })
  userName: string;

}

export const OrderSchema = SchemaFactory.createForClass(Order);