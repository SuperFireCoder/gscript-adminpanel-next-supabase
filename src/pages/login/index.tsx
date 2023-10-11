import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Signin Page | GScript",
  description: "This is Signin page for GScript",
};

const SignIn: React.FC = () => {
  return (
    <>
      <div className="flex justify-between items-center h-20 bg-primary px-10 xl:px-18 2xl:px-34">
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
      </div>
      <div
        className="flex flex-wrap items-center w-3/4 m-auto my-32.5 border border-stroke"
        style={{ boxShadow: "0px 8px 13px rgba(0, 0, 0, 0.07)" }}
      >
        <div className="w-full xl:w-1/2 flex flex-col items-center">
          <div className="px-5 py-6.5">
            <Image
              width={187}
              height={186}
              src={"/images/logo/logo-dark.svg"}
              alt="Logo"
            />
          </div>
          <Image
            width={512}
            height={347}
            src={"/images/developer-logo.svg"}
            alt="Developer Logo"
          />
        </div>
        <div className="w-full xl:w-1/2">
          <div className="w-full p-4 py-25 px-17.5">
            <span className="mb-1.5 block font-medium">Admin Panel</span>
            <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
              Sign In to the Admin Panel
            </h2>

            <form>
              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />

                  <span className="absolute right-4 top-4">
                    <Image
                      width={22}
                      height={22}
                      src={"/images/icon-email.svg"}
                      alt="Email"
                    />
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />

                  <span className="absolute right-4 top-4">
                    <Image
                      width={22}
                      height={22}
                      src={"/images/icon-eye.svg"}
                      alt="Password"
                    />
                  </span>
                </div>
              </div>

              <div className="mb-5">
                <input
                  type="submit"
                  value="Sign In"
                  className="w-full cursor-pointer rounded-full border border-primary2 bg-primary2 p-4 text-white transition hover:bg-opacity-90"
                />
              </div>

              <div className="mt-6 text-center text-gray">
                <p>
                  Write to the <u>admin@g-script.org</u> email address, in case
                  you are having difficulties logging in.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
