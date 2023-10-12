"use client";

import React from "react";
import { useState } from "react";

import Sidebar from "../Sidebar";
import Header from "../Header";
import Footer from "../Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header />
          <main>
            <div className="mx-auto max-w-screen-2xl px-9 py-11.5">
              {children}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
