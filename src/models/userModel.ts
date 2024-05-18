import { Decimal128 } from 'mongodb';

class User {
  name: string;
  last_name: string;
  email: string;
  password: string;
  role: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
  updated_by: string;
  appointments: [
    {
      clinic_id: string;
      appointment_id: string;
      ammount: Decimal128;
      payment_due_date: Date;
    },
  ];
}

export default User;
