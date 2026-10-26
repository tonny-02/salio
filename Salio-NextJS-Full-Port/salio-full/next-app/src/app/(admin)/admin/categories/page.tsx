import { STANDARD_CATEGORIES } from "@/types/salio";

export default function AdminCategoriesPage() {
  return (
    <div className="px-5 py-5">
      <h1 className="text-xl font-bold dark:text-white">Standard categories</h1>
      <p className="text-sm text-[#6D7A70]">
        Students&apos; custom categories are never shown here.
      </p>
      <div className="mt-4 space-y-2">
        {STANDARD_CATEGORIES.map((c) => (
          <div
            key={c}
            className="rounded-xl border border-[#E9E2D0] bg-white px-4 py-3 dark:border-gray-700 dark:bg-[#15241A] dark:text-white"
          >
            {c}
          </div>
        ))}
      </div>
    </div>
  );
}
