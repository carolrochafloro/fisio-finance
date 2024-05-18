import { Decimal128, ObjectId } from 'mongodb';

class Clinic {
  name: string;
  contact: {
    phone: string;
    address: string;
    email: string;
  };
  user_id: string;
  created_at: Date;
  updated_at: Date;
  updated_by: string;
  is_active: boolean;
  appointments: [
    {
      _id: ObjectId;
      date: Date;
      patient_id: string;
      patient_name: string;
      payment_method_id: string;
      payment_method_name: string;
      payment_ammount: Decimal128;
      payment_due_date: Date;
    },
  ];
}
