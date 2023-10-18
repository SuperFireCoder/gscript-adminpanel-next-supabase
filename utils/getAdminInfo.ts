import { SupabaseClient } from "@supabase/supabase-js";
import { Admin } from "../types/user";

export const getAdminInfo = async (supabase: SupabaseClient) => {
  const {
    data: { user },
    error: err1,
  } = await supabase.auth.getUser();

  if (user && !err1) {
    const { data: admin, error: err2 } = await supabase
      .from("admins")
      .select("is_super")
      .eq("user_id", user.id)
      .limit(1)
      .single();

    if (admin && !err2) {
      const data: Admin = {
        id: user.id!,
        email: user.email!,
        is_super: admin.is_super!,
      };

      return { data, error: null };
    }
    return { data: null, error: err2 };
  }
  return { data: null, error: err1 };
};
