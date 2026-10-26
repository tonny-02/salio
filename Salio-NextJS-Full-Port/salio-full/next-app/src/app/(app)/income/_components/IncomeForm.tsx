"use client";

import { useState } from "react";
import { useSalioStore } from "@/hooks/useSalioStore";
import { formatKSh } from "@/lib/format";

const IncomeForm = () => {
  const { ready, state, totalIncome, addIncome } = useSalioStore();
  const [amount, setAmount] = useState("");
  const [source, setSource] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  if (!ready) return null;

  return (
    <div className="px-5 py-6">
      <h1 className="text-xl font-bold dark:text-white">Income</h1>
      <p className="text-sm text-[#6D7A70]">
        Period total: <b>{formatKSh(totalIncome)}</b>
      </p>

      <div className="mt-4 space-y-2">
        {state.income.map((i) => (
          <div
            key={i.id}
            className="flex justify-between rounded-xl border border-[#E9E2D0] bg-white px-4 py-3 dark:border-gray-700 dark:bg-[#15241A]"
          >
            <div>
              <p className="font-medium dark:text-white">{i.source}</p>
              <p className="text-xs text-[#6D7A70]">{i.date}</p>
            </div>
            <p className="font-semibold text-[#177A3D]">{formatKSh(i.amount)}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-6 font-semibold dark:text-white">Add income</h2>
      <label className="mt-2 block text-xs text-[#6D7A70]">
        Source
        <input
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="mt-1 w-full rounded-xl border border-[#E9E2D0] px-3 py-3 dark:border-gray-600 dark:bg-[#15241A] dark:text-white"
        />
      </label>
      <label className="mt-2 block text-xs text-[#6D7A70]">
        Amount
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mt-1 w-full rounded-xl border border-[#E9E2D0] px-3 py-3 dark:border-gray-600 dark:bg-[#15241A] dark:text-white"
        />
      </label>
      <label className="mt-2 block text-xs text-[#6D7A70]">
        Date
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mt-1 w-full rounded-xl border border-[#E9E2D0] px-3 py-3 dark:border-gray-600 dark:bg-[#15241A] dark:text-white"
        />
      </label>
      <button
        type="button"
        className="mt-4 w-full rounded-xl bg-[#12532F] py-3 font-semibold text-white"
        onClick={() => {
          const n = parseFloat(amount);
          if (!n || !source.trim()) return;
          addIncome({ source: source.trim(), amount: n, date });
          setAmount("");
          setSource("");
        }}
      >
        Save income
      </button>
    </div>
  );
};

export default IncomeForm;
