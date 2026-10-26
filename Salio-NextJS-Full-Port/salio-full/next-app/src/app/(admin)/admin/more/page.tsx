import Link from "next/link";
import { ROUTES } from "@/constants";

const links = [
  { href: ROUTES.adminCategories, label: "Manage categories" },
  { href: ROUTES.adminReports, label: "Reports" },
  { href: ROUTES.adminSystemStatus, label: "System status" },
  { href: ROUTES.adminAudit, label: "Security and audit log" },
  { href: ROUTES.adminSettings, label: "App settings" },
];

export default function AdminMorePage() {
  return (
    <div className="px-5 py-5">
      <h1 className="text-xl font-bold dark:text-white">More</h1>
      <div className="mt-4 space-y-2">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="block rounded-xl border border-[#E9E2D0] bg-white px-4 py-3 dark:border-gray-700 dark:bg-[#15241A] dark:text-white"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
