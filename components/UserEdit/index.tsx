"use client";
import { useState } from "react";
import Image from "next/image";

import Modal from "../Modal";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { User } from "../../types/user";
import { SubscriptionLabel, UserDeleteLabel } from "../../consts/modal_labels";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { supabase as service_supabase } from "../../lib/supabase";

interface Props {
  user: User;
}

const UserEditForm = ({ user }: Props) => {
  const [isSubscriptionOpen, setIsSubscriptionOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [password, setPassword] = useState<string>("");

  const supabase = createClientComponentClient();

  const { push } = useRouter();

  const cancelSubscription = async () => {
    const { error } = await supabase
      .from("subscriptions")
      .delete()
      .eq("user_id", user.id);

    if (!error) {
      window.location.reload();
    }
  };

  const deleteUser = async () => {
    const { error } = await service_supabase.auth.admin.deleteUser(
      user.user_id
    );

    if (!error) {
      push("/users");
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const onSave = async () => {
    if (password) {
      const { error } = await service_supabase.auth.admin.updateUserById(
        user.user_id,
        { password }
      );

      if (!error) {
        push("/users");
      }
    } else {
      push("/users");
    }
  };

  return (
    <>
      <div className="col-span-12">
        <div className="rounded-sm border border-gray bg-white shadow-default">
          <div className="flex justify-between border-b border-gray px-7 py-4.5">
            <h4 className="text-base font-medium text-primary">Edit Users</h4>
          </div>
          <div className="flex flex-col gap-7.5 p-11 md:p-7.5 pb-11 text-secondary">
            <div className="flex flex-col md:flex-row gap-7.5">
              <div className="flex flex-col gap-7.5 w-full md:w-1/2">
                <div>
                  <div className="text-sm font-medium mb-3">Name</div>
                  <div className="flex items-center text-base font-medium h-11.5">
                    {user.name}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium mb-3">Email Address</div>
                  <div className="flex items-center text-base font-medium h-11.5">
                    {user.email}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium mb-3">New Password</div>
                  <div className="flex items-center text-base font-medium h-11.5">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="block w-full h-full rounded-md border-0 px-3 py-1.5 text-primary ring-1 ring-gray ring-inset focus:ring-2 focus:ring-inset"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-7.5 w-full md:w-1/2">
                <div>
                  <div className="text-sm font-medium mb-3">
                    Current Subscription
                  </div>
                  <div className="flex items-center gap-5 text-base font-medium h-11.5 justify-between md:justify-normal">
                    {user.type ? user.type : "None"}
                    {user.type && (
                      <button
                        className="inline-flex items-center justify-center gap-2.5 rounded-full border border-primary2 pt-2 pb-2.5 text-center font-medium text-primary2 hover:bg-opacity-90 px-2.5 xl:px-6"
                        onClick={() => setIsSubscriptionOpen(true)}
                      >
                        <Image
                          width={18}
                          height={18}
                          src={"/images/cancel-subscription.svg"}
                          alt="Cancel Subscription"
                        />
                        Cancel Subscription
                      </button>
                    )}
                  </div>
                </div>

                {user.type && (
                  <>
                    <div>
                      <div className="text-sm font-medium mb-3">
                        SubScription Start
                      </div>
                      <div className="flex items-center text-sm font-medium h-11.5">
                        {user.start?.toString()}
                      </div>
                    </div>

                    <div>
                      <div className="text-sm font-medium mb-3">
                        SubScription End
                      </div>
                      <div className="flex items-center text-sm font-medium h-11.5">
                        {user.end?.toString()}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-7.5 md:flex-row justify-between">
              <button
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-primary2 py-2 px-6 text-center font-medium text-primary2 hover:bg-opacity-90"
                onClick={() => setIsDeleteOpen(true)}
              >
                <Image
                  width={18}
                  height={18}
                  src={"/images/icon-trash.svg"}
                  alt="Delete User"
                />
                Delete User
              </button>
              <div className="flex justify-end gap-3 lg:gap-7.5">
                <Link href={"/users"}>
                  <button className="rounded-full border border-primary2 py-2 px-6 text-center font-medium text-primary2 hover:bg-opacity-90">
                    Cancel
                  </button>
                </Link>
                <button
                  className="rounded-full border border-primary2 bg-primary2 py-2 px-6 text-center font-medium text-white hover:bg-opacity-90"
                  onClick={onSave}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isSubscriptionOpen}
        label={SubscriptionLabel(user.name)}
        closeModal={() => setIsSubscriptionOpen(false)}
        onSubmit={cancelSubscription}
      />
      <Modal
        isOpen={isDeleteOpen}
        label={UserDeleteLabel(user.name)}
        closeModal={() => setIsDeleteOpen(false)}
        onSubmit={deleteUser}
      />
    </>
  );
};

export default UserEditForm;
