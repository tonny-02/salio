"use client";

import { useState } from "react";
import { useSalioStore } from "@/hooks/useSalioStore";
import { formatKSh, calcProgress } from "@/lib/format";

const SavingsPage = () => {
  const { ready, state, addContribution } = useSalioStore();
  const [goalId, setGoalId] = useState<string | null>(null);
  const [amount, setAmount] = useState("");

  if (!ready) return null;
  const total = state.savings.reduce((s, g) => s + g.saved, 0);

  return (
    <div className="min-h-screen">
      <header className="bg-[#0B3B22] px-5 pb-6 pt-4 text-white">
        <h1 className="text-xl font-bold">Savings Targets</h1>
        <div className="mt-4 rounded-2xl bg-[#12532F] px-5 py-4">
          <p className="text-sm opacity-80">Total saved</p>
          <p className="text-3xl font-bold">{formatKSh(total)}</p>
        </div>
      </header>
      <div className="space-y-3 px-5 py-5">
        {state.savings.map((g) => {
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
              <div className="mt-2 h-2 rounded-full bg-[#E9E2D0]">
                <div
                  className="h-full rounded-full bg-[#1E9048]"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <button
                type="button"
                className="mt-3 w-full rounded-xl bg-[#12532F] py-2 text-sm font-semibold text-white"
                onClick={() => {
                  setGoalId(g.id);
                  setAmount("");
                }}
              >
                + Add Contribution
              </button>
            </div>
          );
        })}
      </div>

      {goalId && (
        <div className="fixed inset-0 z-50 flex items-end bg-black/40">
          <div className="w-full max-w-md rounded-t-3xl bg-white p-5 dark:bg-[#15241A]">
            <h3 className="font-bold dark:text-white">Add Contribution</h3>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-3 w-full rounded-xl border px-3 py-3 dark:border-gray-600 dark:bg-[#0B3B22] dark:text-white"
              placeholder="Amount"
            />
            <button
              type="button"
              className="mt-3 w-full rounded-xl bg-[#0B3B22] py-3 font-semibold text-white"
              onClick={() => {
                const n = parseFloat(amount);
                if (n > 0) addContribution(goalId, n);
                setGoalId(null);
              }}
            >
              Save
            </button>
            <button
              type="button"
              className="mt-2 w-full py-2 text-sm text-[#6D7A70]"
              onClick={() => setGoalId(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SavingsPage;
