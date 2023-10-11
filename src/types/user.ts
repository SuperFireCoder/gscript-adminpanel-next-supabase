import { USER_ROLE } from "@/consts/role";

export type User = {
  id: number;
  name: string;
  email: string;
  password?: string;
  role: string;
  subscription: string;
  start: string;
  end: string;
};

export const Users: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@gmail.com",
    role: USER_ROLE.NORMAL,
    subscription: "Free Trial",
    start: "09/08/2023",
    end: "09/08/2023",
  },
  {
    id: 2,
    name: "Maciej Kolber",
    email: "john.doe@gmail.com",
    role: USER_ROLE.ADMIN,
    subscription: "Free Trial",
    start: "09/08/2023",
    end: "09/08/2023",
  },
  {
    id: 3,
    name: "Keith",
    email: "john.doe@gmail.com",
    role: USER_ROLE.NORMAL,
    subscription: "Free Trial",
    start: "09/08/2023",
    end: "09/08/2023",
  },
  {
    id: 4,
    name: "Danny",
    email: "john.doe@gmail.com",
    role: USER_ROLE.ADMIN,
    subscription: "Free Trial",
    start: "09/08/2023",
    end: "09/08/2023",
  },
  {
    id: 5,
    name: "Hana",
    email: "john.doe@gmail.com",
    role: USER_ROLE.SUPERADMIN,
    subscription: "Free Trial",
    start: "09/08/2023",
    end: "09/08/2023",
  },
  {
    id: 6,
    name: "James",
    email: "john.doe@gmail.com",
    role: USER_ROLE.NORMAL,
    subscription: "Free Trial",
    start: "09/08/2023",
    end: "09/08/2023",
  },
  {
    id: 7,
    name: "Walker",
    email: "john.doe@gmail.com",
    role: USER_ROLE.NORMAL,
    subscription: "Free Trial",
    start: "09/08/2023",
    end: "09/08/2023",
  },
];
