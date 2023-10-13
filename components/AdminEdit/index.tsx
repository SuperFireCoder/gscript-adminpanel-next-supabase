"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Modal from "../Modal/AdminModal";

const AdminEditForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="col-span-12">
        <div className="rounded-sm border border-gray bg-white shadow-default">
          <div className="flex justify-between border-b border-gray px-7 py-4.5">
            <h4 className="text-base font-medium text-primary">
              Edit Admin User
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

            <div className="flex justify-between">
              <button
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-primary2 py-2 px-6 text-center font-medium text-primary2 hover:bg-opacity-90"
                onClick={() => setIsModalOpen(true)}
              >
                <Image
                  width={18}
                  height={18}
                  src={"/images/icon-trash.svg"}
                  alt="Delete User"
                />
                Delete User
              </button>
              <div className="flex gap-2 md:gap-4 xl:gap-7.5">
                <Link href={"/admin"}>
                  <button className="rounded-full border border-primary2 py-2 px-6 text-center font-medium text-primary2 hover:bg-opacity-90">
                    Cancel
                  </button>
                </Link>
                <button className="rounded-full border border-primary2 bg-primary2 py-2 px-6 text-center font-medium text-white hover:bg-opacity-90">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
    </>
  );
};

export default AdminEditForm;
