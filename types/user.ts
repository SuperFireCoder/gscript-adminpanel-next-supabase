export type User = {
  id: string;
  email: string;
  name: string;
  role: string;
  type: string;
  start: Date;
  end: Date;
  created_at: Date;
};

export type Admin = {
  id: string;
  email: string;
  role: string;
};
