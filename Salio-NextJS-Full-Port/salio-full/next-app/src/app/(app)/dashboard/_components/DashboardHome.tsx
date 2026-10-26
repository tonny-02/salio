"use client";

import Link from "next/link";
import { useSalioStore } from "@/hooks/useSalioStore";
import { formatKSh, calcProgress } from "@/lib/format";
import { CATEGORY_COLOURS, CATEGORY_ICONS } from "@/types/salio";
import { ROUTES } from "@/constants";

const DashboardHome = () => {
  const {
    ready,
    state,
    availableBalance,
    totalIncome,
    totalSpending,
  } = useSalioStore();

  if (!ready) {
    return (
      <div className="p-8 text-center text-sm text-[#6D7A70]">Loading…</div>
    );
  }

  const firstName = state.name.split(" ")[0] || "there";
  const recent = state.transactions.filter((t) => !t.excluded).slice(0, 5);

  return (
    <div>
      <header className="rounded-b-3xl bg-[#0B3B22] px-5 pb-8 pt-4 text-white">
        <div className="mb-4 flex items-center gap-2.5">
          <img
            src="/salio-logo.jpg"
            alt="Salio"
            className="h-9 w-9 rounded-xl object-cover"
          />
          <span className="text-lg font-semibold">Salio</span>
        </div>
        <h1 className="text-2xl font-bold">Good morning, {firstName}</h1>
        <p className="mt-1 text-sm text-white/70">
          Keep going! Your future self will thank you.
        </p>
        <div className="mt-5 rounded-2xl bg-gradient-to-r from-[#F5DFA0] to-[#D9A431] px-5 py-4 text-[#0B3B22]">
          <p className="text-xs font-medium opacity-80">Available Balance</p>
          <p className="mt-1 text-3xl font-bold">{formatKSh(availableBalance)}</p>
        </div>
      </header>

      <div className="grid grid-cols-2 gap-3 px-5 pt-4">
        <div className="rounded-2xl bg-[#E3F3E8] p-4 dark:bg-[#12532F]">
          <p className="text-xs font-semibold text-[#177A3D]">Income</p>
          <p className="mt-1 text-lg font-bold text-[#0B3B22] dark:text-white">
            {formatKSh(totalIncome)}
          </p>
        </div>
        <div className="rounded-2xl bg-[#FBE4E1] p-4 dark:bg-[#3A2220]">
          <p className="text-xs font-semibold text-[#B8442C]">Spending</p>
          <p className="mt-1 text-lg font-bold text-[#0B3B22] dark:text-white">
            {formatKSh(totalSpending)}
          </p>
        </div>
      </div>

      <section className="mt-6 px-5">
        <div className="mb-2 flex justify-between">
          <h2 className="font-semibold text-[#182A1E] dark:text-white">
            Savings Progress
          </h2>
          <Link href={ROUTES.savings} className="text-sm font-medium text-[#A9770F]">
            View all
          </Link>
        </div>
        {state.savings.slice(0, 1).map((g) => {
          const pct = calcProgress(g.saved, g.target);
          return (
            <div
              key={g.id}
              className="rounded-2xl border border-[#E9E2D0] bg-white p-4 dark:border-gray-700 dark:bg-[#15241A]"
            >
              <div className="flex justify-between">
                <div>
                  <p className="font-semibold dark:text-white">{g.name}</p>
                  <p className="text-sm text-[#6D7A70]">
                    {formatKSh(g.saved)} / {formatKSh(g.target)}
                  </p>
                </div>
                <span className="font-bold text-[#177A3D]">{pct}%</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-[#E9E2D0] dark:bg-[#0B3B22]">
                <div
                  className="h-full rounded-full bg-[#1E9048]"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </section>

      <section className="mt-6 px-5 pb-4">
        <div className="mb-2 flex justify-between">
          <h2 className="font-semibold text-[#182A1E] dark:text-white">
            Recent Transactions
          </h2>
          <Link
            href={ROUTES.transactions}
            className="text-sm font-medium text-[#A9770F]"
          >
            View all
          </Link>
        </div>
        <div className="space-y-2">
          {recent.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center gap-3 rounded-2xl border border-[#E9E2D0] bg-white px-4 py-3 dark:border-gray-700 dark:bg-[#15241A]"
            >
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full text-white"
                style={{
                  backgroundColor:
                    CATEGORY_COLOURS[tx.category] || "#6D7A70",
                }}
              >
                {CATEGORY_ICONS[tx.category] || "📦"}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium dark:text-white">
                  {tx.category || tx.details}
                </p>
                <p className="text-xs text-[#6D7A70]">{tx.counterparty}</p>
              </div>
              <p className="font-semibold text-[#B8442C]">
                {formatKSh(tx.amount)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DashboardHome;
