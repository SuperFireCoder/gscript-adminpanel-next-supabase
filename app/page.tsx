import DashboardPage from "./dashboard/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | GScript",
  description: "This is Home page for GScript",
};

export default function Home() {
  return (
    <>
      <DashboardPage />
    </>
  );
}
