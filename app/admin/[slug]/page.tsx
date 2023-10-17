import AdminEditForm from "../../../components/AdminEdit";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { supabase as client_supabase } from "../../../lib/supabase";

const AdminEditPage = async ({
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

  // Get admin data by slug
  const { data, error } = await client_supabase
    .from("users")
    .select("id, email, subscription(role)")
    .eq("id", slug);
  const admin_data =
    data && !error
      ? data.map((admin: any) => ({
          id: admin.id,
          email: admin.email,
          ...admin.subscription[0],
        }))
      : [];

  return <AdminEditForm admin={admin_data} />;
};

export default AdminEditPage;
