import AdminForm from "../../components/Admin";
import AlertDanger from "../../components/Alerts/Danger";
import AlertWarning from "../../components/Alerts/Warning";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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
  const { data: auth_data, error: err1 } = await supabase
    .from("users")
    .select("id, email, subscription(role)")
    .eq("id", user?.id)
    .limit(1);
  const admin_data =
    auth_data && !err1
      ? auth_data.map((admin: any) => ({
          id: admin.id,
          email: admin.email,
          ...admin.subscription[0],
        }))
      : [];

  // Get admins data
  const { data, error: err2 } = await supabase
    .from("users")
    .select("id, email, subscription(role)")
    .eq("subscription.role", "Admin");
  const admins_data =
    data && !err2
      ? data
          .filter((user: any) => user.subscription.length)
          .map((user: any) => ({
            id: user.id,
            email: user.email,
            ...user.subscription[0],
          }))
      : [];

  return (
    <>
      {err1 ? (
        <AlertDanger title={"Error"} content={err1.message} />
      ) : err2 ? (
        <AlertDanger title={"Error"} content={err2.message} />
      ) : admin_data[0]?.role !== USER_ROLE.SUPERADMIN ? (
        <AlertWarning
          title={"Warning"}
          content={"Only Superadmin users can access to this page."}
        />
      ) : (
        <AdminForm admins={admins_data} />
      )}
    </>
  );
};

export default AdminPage;
