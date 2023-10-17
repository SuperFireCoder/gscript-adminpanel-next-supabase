"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { Admin } from "../../types/user";

interface Props {
  admin: Admin[];
}

const Header = ({ admin }: Props) => {
  const supabase = createClientComponentClient();
  const pathname = usePathname();

  const handleLogOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("ERROR:", error);
    }
  };

  return (
    <>
      {pathname.includes("/login") ? (
        <>
          <header className="flex justify-between items-center h-20 bg-primary px-10 xl:px-18 2xl:px-34">
            <Image
              width={72}
              height={59}
              src={"/images/logo/logo.svg"}
              alt="Logo"
            />
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-secondary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Visit the Main Site
            </Link>
          </header>
        </>
      ) : (
        <>
          <header className="sticky h-20 top-0 z-10 flex w-full bg-white drop-shadow-1">
            <div className="flex flex-grow items-center justify-between px-9 py-4 shadow-2">
              <div></div>
              <div className="flex flex-col gap-1">
                <div className="flex gap-3 items-center">
                  <span className="bg-primary2 text-white text-xs py-0.5 px-2 leading-5 rounded-full">
                    {admin[0]?.role}
                  </span>
                  <span className="text-sm">{admin[0]?.email}</span>
                </div>
                <div
                  className="text-right text-gray text-xs cursor-pointer"
                  onClick={handleLogOut}
                >
                  Logout
                </div>
              </div>
            </div>
          </header>
        </>
      )}
    </>
  );
};

export default Header;
