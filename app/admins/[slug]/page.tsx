import AdminEditForm from "../../../components/AdminEdit";
import AlertDanger from "../../../components/Alerts/Danger";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { getAdminData } from "../../../utils/getAdminData";

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
  const { admin, error } = await getAdminData({ slug, supabase });

  return (
    <>
      {error ? (
        <AlertDanger title={"Error"} content={error.message} />
      ) : (
        <AdminEditForm admin={admin} />
      )}
    </>
  );
};

export default AdminEditPage;
