"use client";

import { useSalioStore } from "@/hooks/useSalioStore";
import { formatKSh } from "@/lib/format";
import { CATEGORY_COLOURS } from "@/types/salio";

const BudgetView = () => {
  const { ready, state, totalSpending, spendingByCategory } = useSalioStore();
  if (!ready) return null;

  const remaining = state.budgetTotal - totalSpending;

  return (
    <div className="px-5 py-6">
      <h1 className="text-xl font-bold dark:text-white">Budget & Period</h1>
      <div className="mt-4 rounded-2xl bg-[#0B3B22] p-5 text-white">
        <p className="text-sm opacity-80">Total Budget</p>
        <p className="text-3xl font-bold">{formatKSh(state.budgetTotal)}</p>
        <p className="mt-2 text-sm">
          {formatKSh(totalSpending)} spent · {formatKSh(Math.max(0, remaining))}{" "}
          remaining
        </p>
        <div className="mt-3 h-2 rounded-full bg-white/20">
          <div
            className="h-full rounded-full bg-[#1E9048]"
            style={{
              width: `${Math.min(100, (totalSpending / state.budgetTotal) * 100)}%`,
            }}
          />
        </div>
      </div>

      <h2 className="mt-6 font-semibold dark:text-white">Spending by Category</h2>
      <div className="mt-3 space-y-3">
        {Object.entries(state.alloc).map(([cat, target]) => {
          const spent = spendingByCategory[cat] || 0;
          const pct = target > 0 ? Math.min(100, (spent / target) * 100) : 0;
          return (
            <div
              key={cat}
              className="rounded-2xl border border-[#E9E2D0] bg-white p-4 dark:border-gray-700 dark:bg-[#15241A]"
            >
              <div className="flex justify-between text-sm">
                <span className="font-medium dark:text-white">{cat}</span>
                <span className="text-[#6D7A70]">
                  {formatKSh(spent)} / {formatKSh(target)}
                </span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-[#E9E2D0] dark:bg-[#0B3B22]">
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

export default BudgetView;
