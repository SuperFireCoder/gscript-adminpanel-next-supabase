import UserEditForm from "../../../components/UserEdit";
import AlertDanger from "../../../components/Alerts/Danger";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { getUserData } from "../../../utils/getUserData";

const UserEditPage = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  // Auth user
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user: auth_user },
  } = await supabase.auth.getUser();
  if (!auth_user) {
    redirect("/login");
  }

  // Get user data by slug
  const { user, error } = await getUserData({ slug, supabase });

  return (
    <>
      {error ? (
        <AlertDanger title={"Error"} content={error.message} />
      ) : (
        <UserEditForm user={user} />
      )}
    </>
  );
};

export default UserEditPage;
