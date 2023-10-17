import AdminForm from "../../components/Admin";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { supabase as client_supabase } from "../../lib/supabase";

import { USER_ROLE } from "../../consts/role";

const AdminPage = async () => {
  // Auth User
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect("/login");
  }

  // Get admins data
  const { data, error } = await client_supabase
    .from("users")
    .select("id, email, subscription(role)");
  const admins_data =
    data && !error
      ? data
          .filter(
            (user: any) =>
              (user.subscription.length &&
                user.subscription[0].role === USER_ROLE.ADMIN) ||
              user.subscription[0].role === USER_ROLE.SUPERADMIN
          )
          .map((user: any) => ({
            id: user.id,
            email: user.email,
            ...user.subscription[0],
          }))
      : [];

  return <AdminForm admins={admins_data} />;
};

export default AdminPage;
