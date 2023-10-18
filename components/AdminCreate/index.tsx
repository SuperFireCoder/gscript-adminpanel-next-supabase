"use client";
import Link from "next/link";

const AdminCreateForm = () => {
  return (
    <>
      <div className="col-span-12">
        <div className="rounded-sm border border-gray bg-white shadow-default">
          <div className="flex justify-between border-b border-gray px-7 py-4.5">
            <h4 className="text-base font-medium text-primary">
              Add a New Admin User
            </h4>
          </div>
          <div className="flex flex-col gap-7.5 p-7.5 pb-11 text-secondary">
            <div className="flex flex-wrap gap-7.5">
              <div className="w-full md:flex-1">
                <div className="text-sm font-medium mb-3">Email Address*</div>
                <div className="flex items-center text-base font-medium h-11.5">
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="block w-full h-full rounded-md border-0 px-3 py-1.5 text-primary ring-1 ring-gray ring-inset focus:ring-2 focus:ring-inset"
                  />
                </div>
              </div>
              <div className="w-full md:flex-1">
                <div className="text-sm font-medium mb-3">Password*</div>
                <div className="flex items-center text-base font-medium h-11.5">
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="block w-full h-full rounded-md border-0 px-3 py-1.5 text-primary ring-1 ring-gray ring-inset focus:ring-2 focus:ring-inset"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="flex gap-2 lg:gap-7.5">
                <Link href={"/admins"}>
                  <button className="rounded-full border border-primary2 py-2 px-6 text-center font-medium text-primary2 hover:bg-opacity-90">
                    Cancel
                  </button>
                </Link>
                <button className="rounded-full border border-primary2 bg-primary2 py-2 px-6 text-center font-medium text-white hover:bg-opacity-90">
                  Add Admin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCreateForm;
