"use client";

import Link from "next/link";
import { ROUTES } from "@/constants";
import { useSalioStore } from "@/hooks/useSalioStore";

export default function SettingsPage() {
  const { state } = useSalioStore();

  return (
    <div className="px-5 py-6">
      <h1 className="text-xl font-bold dark:text-white">Profile & Settings</h1>
      <div className="mt-4 rounded-2xl border border-[#E9E2D0] bg-white p-4 dark:border-gray-700 dark:bg-[#15241A]">
        <p className="font-semibold dark:text-white">{state.name}</p>
        <p className="text-sm text-[#6D7A70]">{state.email}</p>
      </div>
      <div className="mt-4 space-y-2">
        {[
          { href: ROUTES.income, label: "Income" },
          { href: ROUTES.budget, label: "Budget & Period" },
          { href: ROUTES.categories, label: "Categories" },
          { href: ROUTES.statements, label: "Statements" },
          { href: ROUTES.insights, label: "Insights" },
          { href: ROUTES.help, label: "Help & Support" },
        ].map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="block rounded-xl border border-[#E9E2D0] bg-white px-4 py-3 font-medium dark:border-gray-700 dark:bg-[#15241A] dark:text-white"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
