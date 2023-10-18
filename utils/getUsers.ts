import { SupabaseClient } from "@supabase/supabase-js";

export const getUsers = async (role: string, supabase: SupabaseClient) => {
  const { data, error } = await supabase
    .from("users")
    .select("id, email, created_at, subscription(name, role, type, start, end)")
    .eq("subscription.role", role);
  const users_data =
    data && !error
      ? data
          .filter((user: any) => user.subscription.length)
          .map((user: any) => ({
            id: user.id,
            email: user.email,
            created_at: user.created_at,
            ...user.subscription[0],
          }))
      : [];
  return { users_data, error };
};
