import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-70 flex-col overflow-y-hidden bg-primary duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
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
              className={`group relative flex items-center text-base gap-2.5 rounded-full py-2 px-4 font-medium duration-300 ease-in-out ${
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
              className={`group relative flex items-center text-base gap-2.5 rounded-full py-2 px-4 font-medium duration-300 ease-in-out ${
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
              className={`group relative flex items-center text-base gap-2.5 rounded-full py-2 px-4 font-medium duration-300 ease-in-out ${
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
