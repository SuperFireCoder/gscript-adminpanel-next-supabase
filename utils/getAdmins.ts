import { SupabaseClient } from "@supabase/supabase-js";
import { Admin } from "../types/user";

export const getAdmins = async (supabase: SupabaseClient) => {
  const { data, error } = await supabase
    .from("admins")
    .select("id, user_id, is_super, auth_users(email)");

  if (data && !error) {
    const admins: Admin[] = data.map((admin: any) => ({
      id: admin.id,
      user_id: admin.user_id,
      is_super: admin.is_super,
      email: admin.auth_users.email,
    }));

    return { admins, error: null };
  }
  return { admins: [], error };
};
