import type { Metadata } from "next";
import BudgetView from "./_components/BudgetView";

export const metadata: Metadata = { title: "Budget · Salio" };
export default function Page() {
  return <BudgetView />;
}
