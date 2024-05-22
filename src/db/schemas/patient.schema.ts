import {
  Prop,
  Schema,
  SchemaFactory,
} from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';
import { ObjectId } from 'mongodb';
import { Clinic } from './clinic.schema';

export type PatientDocument =
  mongoose.HydratedDocument<Patient>;

@Schema()
export class Patient {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  last_name: string;

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

  @Prop()
  pathology: string;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
  })
  clinic_id: Clinic;
}

export const PatientSchema =
  SchemaFactory.createForClass(Patient);
