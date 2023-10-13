"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { supabaseUserClientComponentClient as supabase } from "../../lib/supabase";

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function validateForm(): boolean {
    const newErrors: FormErrors = {};

    if (!formData.email) {
      newErrors.email = "*Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "*Invalid email address";
    }
    if (!formData.password) {
      newErrors.password = "*Password is required";
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  const loginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const { data, error } = await supabase.auth.signInWithPassword({
        ...formData,
      });
      console.log("loginSubmit", data, error);
      router.push("/dashboard");
    }
  };

  return (
    <>
      <form onSubmit={loginSubmit}>
        <div className="mb-4">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              onChange={handleInputChange}
              value={formData.email}
            />
            <span className="absolute right-4 top-4">
              <Image
                width={22}
                height={22}
                src={"/images/icon-email.svg"}
                alt="Email"
              />
            </span>
            {errors.email && (
              <div className="text-xs text-danger font-medium p-1">
                {errors.email}
              </div>
            )}
          </div>
        </div>
        <div className="mb-6">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            Password
          </label>
          <div className="relative">
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              onChange={handleInputChange}
              value={formData.password}
            />
            <span className="absolute right-4 top-4">
              <Image
                width={22}
                height={22}
                src={"/images/icon-eye.svg"}
                alt="Password"
              />
            </span>
            {errors.password && (
              <div className="text-xs text-danger font-medium p-1">
                {errors.password}
              </div>
            )}
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
            Write to the <u>admin@g-script.org</u> email address, in case you
            are having difficulties logging in.
          </p>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
