import type { Metadata } from "next";
import InsightsView from "./_components/InsightsView";

export const metadata: Metadata = { title: "Insights · Salio" };
export default function Page() {
  return <InsightsView />;
}
