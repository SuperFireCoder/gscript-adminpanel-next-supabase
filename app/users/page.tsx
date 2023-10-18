import UserForm from "../../components/User";
import AlertDanger from "../../components/Alerts/Danger";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { getUsers } from "../../utils/getUsers";

const UserPage = async () => {
  // Auth user
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect("/login");
  }

  // Get users data
  const { users, error } = await getUsers({ supabase, type: 2 });

  return (
    <>
      {error ? (
        <AlertDanger title={"Error"} content={error.message} />
      ) : (
        <UserForm users={users} />
      )}
    </>
  );
};

export default UserPage;
