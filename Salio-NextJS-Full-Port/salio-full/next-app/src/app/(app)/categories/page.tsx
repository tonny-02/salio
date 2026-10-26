"use client";

import { STANDARD_CATEGORIES, CATEGORY_ICONS } from "@/types/salio";

export default function CategoriesPage() {
  return (
    <div className="px-5 py-6">
      <h1 className="text-xl font-bold dark:text-white">Categories</h1>
      <p className="text-sm text-[#6D7A70]">
        Default categories appear for every new student.
      </p>
      <div className="mt-4 space-y-2">
        {STANDARD_CATEGORIES.map((c) => (
          <div
            key={c}
            className="flex items-center gap-3 rounded-2xl border border-[#E9E2D0] bg-white px-4 py-3 dark:border-gray-700 dark:bg-[#15241A]"
          >
            <span className="text-xl">{CATEGORY_ICONS[c]}</span>
            <div>
              <p className="font-medium dark:text-white">{c}</p>
              <p className="text-xs text-[#6D7A70]">Default category</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
