import { SupabaseClient } from "@supabase/supabase-js";
import { Admin } from "../types/user";

interface Props {
  slug: string;
  supabase: SupabaseClient;
}

export const getAdminData = async ({ slug, supabase }: Props) => {
  const { data, error } = await supabase
    .from("admins")
    .select("id, user_id, is_super, auth_users(email)")
    .eq("id", slug)
    .limit(1)
    .single();

  if (data && !error) {
    const admin: Admin = {
      id: data.id,
      user_id: data.user_id,
      is_super: data.is_super,
      email: data.auth_users.email,
    };

    return { admin, error: null };
  }
  return { user: null, error };
};
