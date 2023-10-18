export type User = {
  id: string;
  email: string;
  name: string;
  created_at: Date;
  type?: string;
  start?: Date;
  end?: Date;
};

export type Admin = {
  id: string;
  email: string;
  is_super: boolean;
};
