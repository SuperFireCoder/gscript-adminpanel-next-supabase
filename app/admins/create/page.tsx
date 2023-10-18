import AdminCreateForm from "../../../components/AdminCreate";
import AlertDanger from "../../../components/Alerts/Danger";
import AlertWarning from "../../../components/Alerts/Warning";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { USER_ROLE } from "../../../consts/role";

const AdminCreatePage = async () => {
  // Auth User
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect("/login");
  }
  const { data: auth_data, error } = await supabase
    .from("users")
    .select("id, email, subscription(role)")
    .eq("id", user?.id)
    .limit(1);
  const admin_data =
    auth_data && !error
      ? auth_data.map((admin: any) => ({
          id: admin.id,
          email: admin.email,
          ...admin.subscription[0],
        }))
      : [];

  return (
    <>
      {error ? (
        <AlertDanger title={"Error"} content={error.message} />
      ) : admin_data[0]?.role !== USER_ROLE.SUPERADMIN ? (
        <AlertWarning
          title={"Warning"}
          content={"Only Superadmin users can access to this page."}
        />
      ) : (
        <AdminCreateForm />
      )}
    </>
  );
};

export default AdminCreatePage;
