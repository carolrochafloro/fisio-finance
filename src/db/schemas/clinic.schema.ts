import {
  Prop,
  Schema,
  SchemaFactory,
} from '@nestjs/mongoose';
import { Decimal128, ObjectId } from 'mongodb';
import * as mongoose from 'mongoose';
import { User } from './user.schema';
import { Appointment } from './appointment.schema';

export type UserDocument =
  mongoose.HydratedDocument<Clinic>;

@Schema()
export class Clinic {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  contact: {
    phone: string;
    address: string;
    email: string;
  };

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  })
  user_id: User;

  @Prop({ required: true })
  created_at: Date;

  @Prop({ required: true })
  updated_at: Date;

  @Prop({ required: true })
  updated_by: ObjectId;

  @Prop({ required: true })
  is_active: boolean;

  @Prop([Appointment])
  appointments: [Appointment[]];
}

export const ClinicSchema =
  SchemaFactory.createForClass(Clinic);
