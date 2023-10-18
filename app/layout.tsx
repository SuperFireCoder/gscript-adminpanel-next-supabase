import "./globals.css";
import "./data-tables-css.css";
import "./fonts.css";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

import AuthProvider from "../components/AuthProvider";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Compare cookie info
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const accessToken = session?.access_token || null;

  // Get User Info
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data, error } = await supabase
    .from("users")
    .select("id, email, subscription(role)")
    .eq("id", user?.id)
    .limit(1);
  const admin_data =
    data && !error
      ? data.map((admin: any) => ({
          id: admin.id,
          email: admin.email,
          ...admin.subscription[0],
        }))
      : [];

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="flex flex-col h-screen">
          <div className="flex overflow-hidden" style={{ flex: "1 0 auto" }}>
            <Sidebar />
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
              <Header admin={admin_data} />
              <main>
                <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                  <AuthProvider accessToken={accessToken}>
                    {children}
                  </AuthProvider>
                </div>
              </main>
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
