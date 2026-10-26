import type { Metadata } from "next";
import DashboardHome from "./_components/DashboardHome";

export const metadata: Metadata = { title: "Home · Salio" };

export default function Page() {
  return <DashboardHome />;
}
