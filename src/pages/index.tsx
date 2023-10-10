import UserPage from "@/pages/user";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | GScript",
  description: "This is Home page for GScript",
};

export default function Home() {
  return (
    <>
      <UserPage />
    </>
  );
}
