"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSalioStore } from "@/hooks/useSalioStore";
import { STANDARD_CATEGORIES } from "@/types/salio";
import { ROUTES } from "@/constants";

const AddExpenseForm = () => {
  const { addExpense } = useSalioStore();
  const router = useRouter();
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState<string>(STANDARD_CATEGORIES[1]);
  const [details, setDetails] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  const save = () => {
    const n = parseFloat(amount);
    if (!n || n <= 0) return;
    addExpense({
      amount: n,
      category,
      details: details || category,
      counterparty: details || category,
      date,
    });
    router.push(ROUTES.dashboard);
  };

  return (
    <div className="px-5 py-6">
      <h1 className="text-xl font-bold text-[#182A1E] dark:text-white">
        Add expense
      </h1>
      <label className="mt-4 block text-xs text-[#6D7A70]">
        Amount (KSh)
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mt-1 w-full rounded-xl border border-[#E9E2D0] px-3 py-3 dark:border-gray-600 dark:bg-[#15241A] dark:text-white"
        />
      </label>
      <label className="mt-3 block text-xs text-[#6D7A70]">
        Category
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 w-full rounded-xl border border-[#E9E2D0] px-3 py-3 dark:border-gray-600 dark:bg-[#15241A] dark:text-white"
        >
          {STANDARD_CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>
      <label className="mt-3 block text-xs text-[#6D7A70]">
        Details
        <input
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="mt-1 w-full rounded-xl border border-[#E9E2D0] px-3 py-3 dark:border-gray-600 dark:bg-[#15241A] dark:text-white"
          placeholder="e.g. Naivas"
        />
      </label>
      <label className="mt-3 block text-xs text-[#6D7A70]">
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
        onClick={save}
        className="mt-6 w-full rounded-xl bg-[#12532F] py-3 font-semibold text-white"
      >
        Save
      </button>
    </div>
  );
};

export default AddExpenseForm;
