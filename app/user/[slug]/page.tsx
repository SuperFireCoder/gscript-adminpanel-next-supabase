"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import Modal from "../../../components/Modal/UserModal";

const UserEdit = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className="col-span-12">
        <div className="rounded-sm border border-gray bg-white shadow-default">
          <div className="flex justify-between border-b border-gray px-7 py-4.5">
            <h4 className="text-base font-medium text-primary">Edit Users</h4>
          </div>
          <div className="flex flex-col gap-7.5 p-7.5 pb-11 text-secondary">
            <div className="flex gap-7.5">
              <div className="flex-1">
                <div className="text-sm font-medium mb-3">Name</div>
                <div className="flex items-center text-base font-medium h-11.5">
                  John Doe
                </div>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium mb-3">
                  Current Subscription
                </div>
                <div className="flex items-center gap-5 text-base font-medium h-11.5">
                  Standard
                  <button className="inline-flex items-center justify-center gap-2.5 rounded-full border border-primary2 pt-2 pb-2.5 px-6 text-center font-medium text-primary2 hover:bg-opacity-90">
                    <Image
                      width={18}
                      height={18}
                      src={"/images/cancel-subscription.svg"}
                      alt="Cancel Subscription"
                    />
                    Cancel Subscription
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-7.5">
              <div className="flex-1">
                <div className="text-sm font-medium mb-3">Email Address</div>
                <div className="flex items-center text-base font-medium h-11.5">
                  john.doe@gmail.com
                </div>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium mb-3">
                  SubScription Start
                </div>
                <div className="flex items-center text-sm font-medium h-11.5">
                  08/08/2023
                </div>
              </div>
            </div>

            <div className="flex gap-7.5">
              <div className="flex-1">
                <div className="text-sm font-medium mb-3">New Password</div>
                <div className="flex items-center text-base font-medium h-11.5">
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="block w-full h-full rounded-md border-0 px-3 py-1.5 text-primary ring-1 ring-gray ring-inset focus:ring-2 focus:ring-inset"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium mb-3">SubScription End</div>
                <div className="flex items-center text-sm font-medium h-11.5">
                  07/09/2023
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
              <div className="flex gap-7.5">
                <button
                  className="rounded-full border border-primary2 py-2 px-6 text-center font-medium text-primary2 hover:bg-opacity-90"
                  onClick={() => router.push("/user")}
                >
                  Cancel
                </button>
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

export default UserEdit;
