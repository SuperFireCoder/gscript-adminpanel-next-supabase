"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Users } from "../../types/user";
import { USER_ROLE } from "../../consts/role";

const AdminPage = () => {
  const [searchAdmin, setSearchAdmin] = useState("");

  return (
    <>
      <div className="col-span-12">
        <div className="rounded-sm border border-gray border-b-0 bg-white shadow-default">
          <div className="flex justify-between items-center pl-9 pr-6.5 py-3">
            <h4 className="text-title-sm2 font-bold text-primary">
              Admin Users in the System
            </h4>
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
                  setSearchAdmin(e.target.value);
                }}
              />
            </div>
            <Link
              href="/admin/create"
              className="rounded-full border border-primary2 bg-primary2 py-3.5 px-10 text-center font-medium text-white hover:bg-opacity-90"
            >
              Add a New Admin
            </Link>
          </div>

          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className="block min-w-full">
                <div className="overflow-hidden">
                  <table className="min-w-full text-secondary text-left">
                    <thead className="border-y border-gray text-base">
                      <tr>
                        <th
                          scope="col"
                          className="px-7.5 py-4.5 font-medium w-3/12 min-w-60"
                        >
                          Email Address
                        </th>
                        <th
                          scope="col"
                          className="px-7.5 py-4.5 font-medium w-3/12 min-w-60"
                        >
                          User Role
                        </th>
                        <th
                          scope="col"
                          className="px-7.5 py-4.5 font-medium"
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      {Users.filter(
                        (user) =>
                          (user.role === USER_ROLE.ADMIN ||
                            user.role === USER_ROLE.SUPERADMIN) &&
                          (user.name
                            .toLowerCase()
                            .includes(searchAdmin.toLowerCase()) ||
                            user.email
                              .toLowerCase()
                              .includes(searchAdmin.toLowerCase()))
                      ).map((user) => (
                        <tr
                          key={user.id}
                          className="border-b border-gray text-sm"
                        >
                          <td className="whitespace-nowrap px-7.5 py-8 font-medium">
                            {user.email}
                          </td>
                          <td className="whitespace-nowrap px-7.5 py-8 font-medium">
                            <span className="bg-primary2 text-white text-xs py-0.5 px-2 h-5.5 leading-5 rounded-full">
                              {user.role}
                            </span>
                          </td>
                          <td className="px-7.5 py-8 flex justify-end">
                            <Link href={`/admin/${user.id}`}>
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

export default AdminPage;
