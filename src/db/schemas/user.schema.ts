import {
  Prop,
  Schema,
  SchemaFactory,
} from '@nestjs/mongoose';
import { Decimal128, ObjectId } from 'mongodb';
import * as mongoose from 'mongoose';
import { Clinic } from './clinic.schema';
import { Appointment } from './appointment.schema';
export type UserDocument = mongoose.HydratedDocument<User>;

@Schema()
class AppointmentDetails {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Clinic',
  })
  clinic_id: Clinic;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Appointment',
  })
  appointment_id: Appointment;

  @Prop()
  ammount: Decimal128;

  @Prop()
  payment_due_date: Date;
}

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  last_name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  role: string;

  @Prop({ required: true })
  is_active: boolean;

  @Prop({ required: true })
  created_at: Date;

  @Prop({ required: true })
  updated_at: Date;

  @Prop({ required: true })
  updated_by: ObjectId;

  @Prop([AppointmentDetails])
  appointments: [AppointmentDetails[]];
}

export const UserSchema =
  SchemaFactory.createForClass(User);
