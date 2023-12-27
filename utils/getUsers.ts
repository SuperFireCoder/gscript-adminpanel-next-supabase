import { SupabaseClient } from "@supabase/supabase-js";
import { User } from "../types/user";

interface Props {
  supabase: SupabaseClient;
  type: number;
}

export const getUsers = async ({ supabase, type }: Props) => {
  const { data, error } =
    type === 1
      ? await supabase
          .from("users")
          .select(
            "id, name, auth_users(id, email, created_at), subscriptions(type, start, end)"
          )
          .limit(4)
      : await supabase
          .from("users")
          .select(
            "id, name, auth_users(id, email, created_at), subscriptions(type, start, end)"
          );

  if (data && !error) {
    const users: User[] = data.map((user: any) => ({
      id: user.id,
      name: user.name,
      user_id: user.auth_users.id,
      email: user.auth_users.email,
      created_at: user.auth_users.created_at,
      ...user.subscriptions[0],
    }));

    return { users, error: null };
  }
  return { users: [], error };
};
