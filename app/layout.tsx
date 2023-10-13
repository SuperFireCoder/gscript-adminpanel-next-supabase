import "./globals.css";
import "./data-tables-css.css";
import "./fonts.css";

import { headers } from "next/headers";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

import AuthProvider from "../components/AuthProvider";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const pathname = headersList.get("x-url") || "";

  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const accessToken = session?.access_token || null;

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user && !pathname.includes("login")) {
    redirect("/login");
  }

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {pathname.includes("/login") ? (
          <>{children}</>
        ) : (
          <div>
            <div className="flex overflow-hidden">
              <Sidebar />
              <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                <Header />
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
        )}
      </body>
    </html>
  );
}
