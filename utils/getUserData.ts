import { SupabaseClient } from "@supabase/supabase-js";
import { User } from "../types/user";

interface Props {
  slug: string;
  supabase: SupabaseClient;
}

export const getUserData = async ({ slug, supabase }: Props) => {
  const { data, error } = await supabase
    .from("users")
    .select(
      "id, name, auth_users(id, email, created_at), subscriptions(type, start, end)"
    )
    .eq("id", slug)
    .limit(1)
    .single();

  if (data && !error) {
    const user: User = {
      id: data.id,
      name: data.name,
      user_id: data.auth_users.id,
      email: data.auth_users.email,
      created_at: data.auth_users.created_at,
      ...data.subscriptions[0],
    };

    return { user, error: null };
  }
  return { user: null, error };
};
