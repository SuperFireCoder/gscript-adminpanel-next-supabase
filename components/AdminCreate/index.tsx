"use client";
import { useState } from "react";
import Link from "next/link";

import { supabase as service_supabase } from "../../lib/supabase";

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

const AdminCreateForm = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

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

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const {
        data: { user },
        error,
      } = await service_supabase.auth.admin.createUser({
        ...formData,
      });
      if (!error) {
        const { error: err } = await service_supabase
          .from("admins")
          .insert({ user_id: user!.id });
        if (!err) {
          window.location.href = "/admins";
        }
      }
    }
  };

  return (
    <>
      <div className="col-span-12">
        <div className="rounded-sm border border-gray bg-white shadow-default">
          <div className="flex justify-between border-b border-gray px-7 py-4.5">
            <h4 className="text-base font-medium text-primary">
              Add a New Admin User
            </h4>
          </div>
          <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-7.5 p-7.5 pb-11 text-secondary">
              <div className="flex flex-wrap gap-7.5">
                <div className="w-full md:flex-1">
                  <div className="text-sm font-medium mb-3">Email Address*</div>
                  <div className="flex flex-col items-center text-base font-medium ">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="block w-full h-11.5 rounded-md border-0 px-3 py-1.5 text-primary ring-1 ring-gray ring-inset focus:ring-2 focus:ring-inset"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && (
                      <div className="w-full text-left text-xs text-danger font-medium p-1">
                        {errors.email}
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-full md:flex-1">
                  <div className="text-sm font-medium mb-3">Password*</div>
                  <div className="flex flex-col items-center text-base font-medium ">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="block w-full h-11.5 rounded-md border-0 px-3 py-1.5 text-primary ring-1 ring-gray ring-inset focus:ring-2 focus:ring-inset"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                    {errors.password && (
                      <div className="w-full text-left text-xs text-danger font-medium p-1">
                        {errors.password}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="flex gap-2 lg:gap-7.5">
                  <Link href={"/admins"}>
                    <button
                      type="button"
                      className="rounded-full border border-primary2 py-2 px-6 text-center font-medium text-primary2 hover:bg-opacity-90"
                    >
                      Cancel
                    </button>
                  </Link>
                  <button
                    type="submit"
                    className="rounded-full border border-primary2 bg-primary2 py-2 px-6 text-center font-medium text-white hover:bg-opacity-90"
                  >
                    Add Admin
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminCreateForm;
