export type User = {
  id: number;
  user_id: string;
  email: string;
  name: string;
  created_at: Date;
  type?: string;
  start?: Date;
  end?: Date;
};

export type Admin = {
  id: number;
  user_id: string;
  email: string;
  is_super: boolean;
};
