"use client";

import { useSalioStore } from "@/hooks/useSalioStore";
import { formatKSh } from "@/lib/format";
import { CATEGORY_COLOURS, CATEGORY_ICONS } from "@/types/salio";

const InsightsView = () => {
  const { ready, totalSpending, spendingByCategory } = useSalioStore();
  if (!ready) return null;

  const entries = Object.entries(spendingByCategory).sort((a, b) => b[1] - a[1]);

  return (
    <div className="px-5 py-6">
      <h1 className="text-xl font-bold dark:text-white">Spending by Category</h1>
      <div className="mt-4 rounded-2xl bg-[#0B3B22] px-5 py-4 text-white">
        <p className="text-sm opacity-80">Total spent</p>
        <p className="text-3xl font-bold">{formatKSh(totalSpending)}</p>
      </div>
      <div className="mt-4 space-y-3">
        {entries.map(([cat, amount]) => {
          const pct =
            totalSpending > 0
              ? Math.round((amount / totalSpending) * 100)
              : 0;
          return (
            <div
              key={cat}
              className="rounded-2xl border border-[#E9E2D0] bg-white p-4 dark:border-gray-700 dark:bg-[#15241A]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full text-white"
                    style={{
                      backgroundColor: CATEGORY_COLOURS[cat] || "#6D7A70",
                    }}
                  >
                    {CATEGORY_ICONS[cat] || "📦"}
                  </div>
                  <div>
                    <p className="font-semibold dark:text-white">{cat}</p>
                    <p className="text-sm text-[#6D7A70]">{pct}% of total</p>
                  </div>
                </div>
                <p className="font-bold dark:text-white">{formatKSh(amount)}</p>
              </div>
              <div className="mt-2 h-2 rounded-full bg-[#E9E2D0]">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${pct}%`,
                    backgroundColor: CATEGORY_COLOURS[cat] || "#1E9048",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InsightsView;
