import UserForm from "../../components/User";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { supabase as client_supabase } from "../../lib/supabase";

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
  const { data, error } = await client_supabase
    .from("users")
    .select("id, email, created_at, subscription(name, role, type, start, end)")
    .eq("subscription.role", "user");
  const users_data =
    data && !error
      ? data
          .filter((user: any) => user.subscription.length)
          .map((user: any) => ({
            id: user.id,
            email: user.email,
            created_at: user.created_at,
            ...user.subscription[0],
          }))
      : [];

  return <UserForm users={users_data} />;
};

export default UserPage;
