import Image from "next/image";

import LoginForm from "../../components/Login";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Login = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (data?.session) {
    redirect("/");
  }

  return (
    <>
      <div
        className="flex flex-wrap w-full xl:w-3/4 m-auto xl:my-32.5 border border-stroke"
        style={{ boxShadow: "0px 8px 13px rgba(0, 0, 0, 0.07)" }}
      >
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="px-5 py-8.5">
            <Image
              width={225}
              height={186}
              src={"/images/logo/logo-dark.svg"}
              alt="Logo"
            />
          </div>
          <div className="px-8 py-5">
            <Image
              width={512}
              height={347}
              src={"/images/developer-logo.svg"}
              alt="Developer Logo"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="w-full p-4 py-25 px-17.5">
            <span className="mb-1.5 block font-medium">Admin Panel</span>
            <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
              Sign In to the Admin Panel
            </h2>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
