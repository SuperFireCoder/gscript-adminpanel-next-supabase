import RootLayout from "@/components/Layout/layout";
import Image from "next/image";
import { User } from "@/types/user";
import Link from "next/link";

const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@gmail.com",
    subscription: "Free Trial",
    start: "09/08/2023",
    end: "09/08/2023",
  },
  {
    id: 2,
    name: "John Doe",
    email: "john.doe@gmail.com",
    subscription: "Free Trial",
    start: "09/08/2023",
    end: "09/08/2023",
  },
  {
    id: 3,
    name: "John Doe",
    email: "john.doe@gmail.com",
    subscription: "Free Trial",
    start: "09/08/2023",
    end: "09/08/2023",
  },
  {
    id: 4,
    name: "John Doe",
    email: "john.doe@gmail.com",
    subscription: "Free Trial",
    start: "09/08/2023",
    end: "09/08/2023",
  },
  {
    id: 5,
    name: "John Doe",
    email: "john.doe@gmail.com",
    subscription: "Free Trial",
    start: "09/08/2023",
    end: "09/08/2023",
  },
  {
    id: 6,
    name: "John Doe",
    email: "john.doe@gmail.com",
    subscription: "Free Trial",
    start: "09/08/2023",
    end: "09/08/2023",
  },
  {
    id: 7,
    name: "John Doe",
    email: "john.doe@gmail.com",
    subscription: "Free Trial",
    start: "09/08/2023",
    end: "09/08/2023",
  },
];

const UserPage = () => {
  return (
    <RootLayout>
      <div className="col-span-12">
        <div className="rounded-sm border border-gray border-b-0 bg-white shadow-default">
          <div className="flex justify-between px-9 py-6.5">
            <div>
              <h4 className="text-title-sm2 font-bold text-primary">Users</h4>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className="block min-w-full">
                <div className="overflow-hidden">
                  <table className="min-w-full text-secondary text-left">
                    <thead className="border-y border-gray text-base">
                      <tr>
                        <th scope="col" className="px-7.5 py-4.5 font-medium">
                          Name
                        </th>
                        <th scope="col" className="px-7.5 py-4.5 font-medium">
                          Email
                        </th>
                        <th scope="col" className="px-7.5 py-4.5 font-medium">
                          Subscription Title
                        </th>
                        <th scope="col" className="px-7.5 py-4.5 font-medium">
                          Subscription Start
                        </th>
                        <th scope="col" className="px-7.5 py-4.5 font-medium">
                          Subscription End
                        </th>
                        <th
                          scope="col"
                          className="px-7.5 py-4.5 font-medium"
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr
                          key={user.id}
                          className="border-b border-gray text-sm"
                        >
                          <td className="whitespace-nowrap px-7.5 py-8 font-medium">
                            {user.name}
                          </td>
                          <td className="whitespace-nowrap px-7.5 py-8 font-medium">
                            {user.email}
                          </td>
                          <td className="whitespace-nowrap px-7.5 py-8 font-medium">
                            {user.subscription}
                          </td>
                          <td className="whitespace-nowrap px-7.5 py-8 font-medium">
                            {user.start}
                          </td>
                          <td className="whitespace-nowrap px-7.5 py-8 font-medium">
                            {user.end}
                          </td>
                          <td className="px-7.5 py-8">
                            <Link href={`/user/${user.id}`}>
                              <Image
                                width={18}
                                height={18}
                                src={"/images/file-pen.svg"}
                                alt="File Pen"
                              />
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default UserPage;
