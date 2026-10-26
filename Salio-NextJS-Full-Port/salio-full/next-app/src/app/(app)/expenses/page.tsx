import type { Metadata } from "next";
import AddExpenseForm from "./_components/AddExpenseForm";

export const metadata: Metadata = { title: "Add expense · Salio" };

export default function Page() {
  return <AddExpenseForm />;
}
