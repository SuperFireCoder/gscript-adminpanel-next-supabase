"use client";
import "./globals.css";
import "./data-tables-css.css";
import "./fonts.css";

import { useState } from "react";
import { usePathname } from "next/navigation";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {pathname === "/login" ? (
          <>{children}</>
        ) : (
          <div>
            <div className="flex overflow-hidden">
              <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                <Header />
                <main>
                  <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                    {children}
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
