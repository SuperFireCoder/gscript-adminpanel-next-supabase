import "./globals.css";
import "./data-tables-css.css";
import "./fonts.css";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

import AuthProvider from "../components/AuthProvider";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { getAuthAdminInfo } from "../utils/getAuthAdminInfo";

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

  // Get admin info
  const { data, error } = await getAuthAdminInfo(supabase);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="flex flex-col h-screen">
          <div className="flex overflow-hidden" style={{ flex: "1 0 auto" }}>
            <Sidebar />
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
              <Header admin={data} />
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
