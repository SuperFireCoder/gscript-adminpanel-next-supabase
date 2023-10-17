import UserEditForm from "../../../components/UserEdit";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { supabase as client_supabase } from "../../../lib/supabase";

const UserEditPage = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  // Auth user
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect("/login");
  }

  // Get user data by slug
  const { data, error } = await client_supabase
    .from("users")
    .select("id, email, created_at, subscription(name, role, type, start, end)")
    .eq("id", slug)
    .limit(1);
  const user_data =
    data && !error
      ? data.map((user: any) => ({
          id: user.id,
          email: user.email,
          created_at: user.created_at,
          ...user.subscription[0],
        }))
      : [];

  return <UserEditForm user={user_data} />;
};

export default UserEditPage;
