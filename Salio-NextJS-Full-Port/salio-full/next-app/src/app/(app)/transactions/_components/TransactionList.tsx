"use client";

import { useSalioStore } from "@/hooks/useSalioStore";
import { formatKSh } from "@/lib/format";
import { CATEGORY_COLOURS, CATEGORY_ICONS } from "@/types/salio";

const TransactionList = () => {
  const { ready, state } = useSalioStore();
  if (!ready) return <p className="p-6 text-sm text-[#6D7A70]">Loading…</p>;

  const list = state.transactions.filter((t) => !t.excluded);

  return (
    <div className="px-5 py-6">
      <h1 className="text-xl font-bold dark:text-white">Transactions</h1>
      <p className="text-sm text-[#6D7A70]">History for this period</p>
      <div className="mt-4 space-y-2">
        {list.length === 0 && (
          <p className="text-sm text-[#6D7A70]">No transactions yet.</p>
        )}
        {list.map((tx) => (
          <div
            key={tx.id}
            className="flex items-center gap-3 rounded-2xl border border-[#E9E2D0] bg-white px-4 py-3 dark:border-gray-700 dark:bg-[#15241A]"
          >
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full text-white"
              style={{
                backgroundColor: CATEGORY_COLOURS[tx.category] || "#6D7A70",
              }}
            >
              {CATEGORY_ICONS[tx.category] || "📦"}
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-medium dark:text-white">{tx.category}</p>
              <p className="truncate text-xs text-[#6D7A70]">{tx.details}</p>
            </div>
            <p
              className={
                tx.type === "in"
                  ? "font-semibold text-[#177A3D]"
                  : "font-semibold text-[#B8442C]"
              }
            >
              {tx.type === "in" ? "+" : ""}
              {formatKSh(tx.amount)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
