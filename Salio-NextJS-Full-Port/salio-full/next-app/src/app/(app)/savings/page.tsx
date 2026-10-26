import type { Metadata } from "next";
import SavingsPage from "./_components/SavingsPage";

export const metadata: Metadata = { title: "Savings · Salio" };
export default function Page() {
  return <SavingsPage />;
}
