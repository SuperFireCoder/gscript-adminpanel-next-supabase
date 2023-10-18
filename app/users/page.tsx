import UserForm from "../../components/User";
import AlertDanger from "../../components/Alerts/Danger";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { getUsers } from "../../utils/getUsers";
import { USER_ROLE } from "../../consts/role";

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
  const { users_data, error } = await getUsers(USER_ROLE.NORMAL, supabase);

  return (
    <>
      {error ? (
        <AlertDanger title={"Error"} content={error.message} />
      ) : (
        <UserForm users={users_data} />
      )}
    </>
  );
};

export default UserPage;
