import type { Metadata } from "next";
import IncomeForm from "./_components/IncomeForm";

export const metadata: Metadata = { title: "Income · Salio" };
export default function Page() {
  return <IncomeForm />;
}
