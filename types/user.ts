import { USER_ROLE } from "../consts/role";

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
