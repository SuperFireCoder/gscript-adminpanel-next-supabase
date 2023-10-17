"use client";
import Image from "next/image";
import Link from "next/link";

import { User } from "../../types/user";

import { useState } from "react";

interface Props {
  users: User[];
}

const UserForm = ({ users }: Props) => {
  const [searchUser, setSearchUser] = useState<string>("");

  return (
    <>
      <div className="col-span-12">
        <div className="rounded-sm border border-gray border-b-0 bg-white shadow-default">
          <div className="flex justify-between px-9 py-6.5">
            <h4 className="text-title-sm2 font-bold text-primary">Users</h4>
            <div className="flex items-center overflow-hidden">
              <Image
                width={18}
                height={18}
                src={"/images/icon-search.svg"}
                alt="Search"
              />
              <input
                type="text"
                placeholder="Search for a user"
                className="py-2 px-2.5 text-gray placeholder-gray bg-transparent focus:outline-none"
                onChange={(e) => {
                  e.preventDefault();
                  setSearchUser(e.target.value.toLowerCase());
                }}
              />
            </div>
            <div className="hidden md:block"></div>
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
                      {users
                        .filter(
                          (user: User) =>
                            user.name.toLowerCase().includes(searchUser) ||
                            user.email.toLowerCase().includes(searchUser)
                        )
                        .map((user: User) => (
                          <tr
                            key={user.id}
                            className="border-b border-gray text-sm"
                          >
                            <td className="px-7.5 py-8 font-medium max-w-70 whitespace-normal">
                              {user.name}
                            </td>
                            <td className="whitespace-nowrap px-7.5 py-8 font-medium">
                              {user.email}
                            </td>
                            <td className="whitespace-nowrap px-7.5 py-8 font-medium">
                              {user.type}
                            </td>
                            <td className="whitespace-nowrap px-7.5 py-8 font-medium">
                              {user.start?.toString()}
                            </td>
                            <td className="whitespace-nowrap px-7.5 py-8 font-medium">
                              {user.end?.toString()}
                            </td>
                            <td className="px-7.5 py-8 flex justify-end min-w-20">
                              <Link href={`/user/${user?.id}`}>
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
    </>
  );
};

export default UserForm;
