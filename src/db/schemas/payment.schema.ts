import {
  Prop,
  Schema,
  SchemaFactory,
} from '@nestjs/mongoose';
import { Decimal128, ObjectId } from 'mongodb';
import * as mongoose from 'mongoose';
import { User } from './user.schema';

export type PaymentDocument =
  mongoose.HydratedDocument<Payment>;

@Schema()
export class Payment {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  ammount: Decimal128;

  @Prop({ required: true })
  due_date: Date;

  @Prop({ required: true })
  created_at: Date;

  @Prop({ required: true })
  updated_at: Date;

  @Prop({ required: true })
  updated_by: ObjectId;

  @Prop({ required: true })
  is_active: boolean;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  })
  user_id: User;
}

export const AppointmentSchema =
  SchemaFactory.createForClass(Payment);
