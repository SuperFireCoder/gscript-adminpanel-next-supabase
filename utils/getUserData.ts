import { SupabaseClient } from "@supabase/supabase-js";

interface Props {
  slug: string;
  supabase: SupabaseClient;
  type: number;
}

export const getUserData = async ({ slug, supabase, type }: Props) => {
  const { data, error } = await supabase
    .from("users")
    .select("id, email, created_at, subscription(name, role, type, start, end)")
    .eq("id", slug)
    .limit(1);
  const user_data =
    data && !error
      ? data.map((user: any) => ({
          id: user.id,
          email: user.email,
          created_at: user.created_at,
          ...user.subscription[0],
        }))
      : [];
  return { user_data, error };
};
