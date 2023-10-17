"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = () => {
  const pathname = usePathname();

  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const isLogin = pathname.includes("/login");
    setSidebarOpen(!isLogin);
  }, [pathname]);

  return (
    <aside
      className={`absolute left-0 top-0 z-20 flex h-full w-70 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark -translate-x-full ${
        sidebarOpen ? "lg:static lg:translate-x-0" : ""
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-center gap-2 px-6.5 py-6 lg:py-6.5">
        <Link href="/dashboard">
          <Image
            width={127}
            height={104}
            src={"/images/logo/logo.svg"}
            alt="Logo"
          />
        </Link>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear px-6">
        <ul className="flex flex-col gap-1.5">
          {/* <!-- Menu Item Dashboard --> */}
          <li>
            <Link
              href="/dashboard"
              className={`group relative flex items-center text-base gap-2.5 rounded-full py-2 px-4 font-medium ${
                pathname.includes("dashboard") || pathname === "/"
                  ? "text-primary bg-white hover:bg-bodydark"
                  : "text-white bg-gray hover:bg-graydark"
              }`}
            >
              <Image
                src={
                  pathname.includes("dashboard") || pathname === "/"
                    ? "/images/dashboard-dark.svg"
                    : "/images/dashboard.svg"
                }
                width={24}
                height={24}
                alt="Dashboard"
              />
              Dashboard
            </Link>
          </li>
          {/* <!-- Menu Item Dashboard --> */}

          {/* <!-- Menu Item User Management --> */}
          <li>
            <Link
              href="/user"
              className={`group relative flex items-center text-base gap-2.5 rounded-full py-2 px-4 font-medium ${
                pathname.includes("user")
                  ? "text-primary bg-white hover:bg-bodydark"
                  : "text-white bg-gray hover:bg-graydark"
              }`}
            >
              <Image
                src={
                  pathname.includes("user")
                    ? "/images/user-management-dark.svg"
                    : "/images/user-management.svg"
                }
                width={24}
                height={24}
                alt="User Management"
              />
              User Management
            </Link>
          </li>
          {/* <!-- Menu Item User Management --> */}

          {/* <!-- Menu Item Admin Management --> */}
          <li>
            <Link
              href="/admin"
              className={`group relative flex items-center text-base gap-2.5 rounded-full py-2 px-4 font-medium ${
                pathname.includes("admin")
                  ? "text-primary bg-white hover:bg-bodydark"
                  : "text-white bg-gray hover:bg-graydark"
              }`}
            >
              <Image
                src={
                  pathname.includes("admin")
                    ? "/images/admin-management-dark.svg"
                    : "/images/admin-management.svg"
                }
                width={24}
                height={24}
                alt="Admin Management"
              />
              Admin Management
            </Link>
          </li>
          {/* <!-- Menu Item Admin Management --> */}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
