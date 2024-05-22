import {
  Prop,
  Schema,
  SchemaFactory,
} from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';
import { Patient } from './patient.schema';
import { Payment } from './payment.schema';
import { Decimal128, ObjectId } from 'mongodb';

export type UserDocument =
  mongoose.HydratedDocument<Appointment>;

@Schema()
export class Appointment {
  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  })
  user_id: User;

  @Prop({ required: true })
  date: Date;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
  })
  patient_id: Patient;

  @Prop({
    required: true,
  })
  patient_name: string;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Payment',
  })
  payment_id: Payment;

  @Prop({
    required: true,
  })
  payment_name: string;

  @Prop({
    required: true,
  })
  payment_ammount: Decimal128;

  @Prop({
    required: true,
  })
  payment_due_date: Date;

  @Prop({ required: true })
  created_at: Date;

  @Prop({ required: true })
  updated_at: Date;

  @Prop({ required: true })
  updated_by: ObjectId;

  @Prop({ required: true })
  is_active: boolean;
}

export const AppointmentSchema =
  SchemaFactory.createForClass(Appointment);
