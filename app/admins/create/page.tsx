import AdminCreateForm from "../../../components/AdminCreate";
import AlertDanger from "../../../components/Alerts/Danger";
import AlertWarning from "../../../components/Alerts/Warning";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { getAuthAdminInfo } from "../../../utils/getAuthAdminInfo";

const AdminCreatePage = async () => {
  // Auth User
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect("/login");
  }

  // Get auth admin info
  const { data: auth_admin, error } = await getAuthAdminInfo(supabase);

  return (
    <>
      {error ? (
        <AlertDanger title={"Error"} content={error.message} />
      ) : auth_admin?.is_super ? (
        <AdminCreateForm />
      ) : (
        <AlertWarning
          title={"Warning"}
          content={"Only Superadmin users can access to this page."}
        />
      )}
    </>
  );
};

export default AdminCreatePage;
