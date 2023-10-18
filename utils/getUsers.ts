import { SupabaseClient } from "@supabase/supabase-js";

interface Props {
  supabase: SupabaseClient;
  type: number;
}

export const getUsers = async ({ supabase, type }: Props) => {
  const { data, error } = await supabase
    .from("users")
    .select("id, name, auth_users(email), subscriptions(type, start, end)");

  if (data && !error) {
    const users = data.map((user: any) => ({
      id: user.id,
      name: user.name,
      email: user.auth_users.email,
      ...user.subscriptions[0],
    }));

    return { users, error: null };
  }
  return { users: [], error };
};
