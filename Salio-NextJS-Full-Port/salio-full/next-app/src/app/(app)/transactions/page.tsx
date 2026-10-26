import type { Metadata } from "next";
import TransactionList from "./_components/TransactionList";

export const metadata: Metadata = { title: "Transactions · Salio" };
export default function Page() {
  return <TransactionList />;
}
