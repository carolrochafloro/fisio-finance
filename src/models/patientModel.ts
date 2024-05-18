class Patient {
  name: string;
  last_name: string;
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
  pathology: string;
  clinic_id: string;

  constructor() {}
}
