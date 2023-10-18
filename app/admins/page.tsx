import AdminForm from "../../components/Admin";
import AlertDanger from "../../components/Alerts/Danger";
import AlertWarning from "../../components/Alerts/Warning";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { getAuthAdminInfo } from "../../utils/getAuthAdminInfo";
import { getAdmins } from "../../utils/getAdmins";

const AdminPage = async () => {
  // Auth User
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect("/login");
  }

  // Get auth admin info
  const { data: auth_admin, error: err1 } = await getAuthAdminInfo(supabase);

  // Get admins data
  const { admins, error: err2 } = await getAdmins(supabase);

  return (
    <>
      {err1 ? (
        <AlertDanger title={"Error"} content={err1.message} />
      ) : err2 ? (
        <AlertDanger title={"Error"} content={err2.message} />
      ) : auth_admin?.is_super ? (
        <AdminForm admins={admins} />
      ) : (
        <AlertWarning
          title={"Warning"}
          content={"Only Superadmin users can access to this page."}
        />
      )}
    </>
  );
};

export default AdminPage;
