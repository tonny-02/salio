"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/constants";

const BottomNav = () => {
  const pathname = usePathname();
  const active = (href: string) =>
    href === ROUTES.dashboard
      ? pathname === "/dashboard" || pathname === "/"
      : pathname.startsWith(href);

  const cls = (href: string) =>
    active(href)
      ? "text-[#177A3D] dark:text-[#F5DFA0]"
      : "text-[#6D7A70] dark:text-gray-400";

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 mx-auto max-w-md border-t border-[#E9E2D0] bg-[#F6F1E6] dark:border-gray-800 dark:bg-[#0B3B22]">
      <div className="relative flex h-[72px] items-center justify-around px-1">
        <Link href={ROUTES.dashboard} className={`flex flex-col items-center gap-0.5 ${cls(ROUTES.dashboard)}`}>
          <span className="text-lg">🏠</span>
          <span className="text-[10px] font-medium">Home</span>
        </Link>
        <Link href={ROUTES.transactions} className={`flex flex-col items-center gap-0.5 ${cls(ROUTES.transactions)}`}>
          <span className="text-lg">↔</span>
          <span className="text-[10px] font-medium">Transactions</span>
        </Link>
        <div className="relative -top-5">
          <Link
            href={ROUTES.expenses}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#12532F] text-2xl text-white shadow-lg"
            aria-label="Add expense"
          >
            +
          </Link>
        </div>
        <Link href={ROUTES.savings} className={`flex flex-col items-center gap-0.5 ${cls(ROUTES.savings)}`}>
          <span className="text-lg">🐷</span>
          <span className="text-[10px] font-medium">Savings</span>
        </Link>
        <Link href={ROUTES.settings} className={`flex flex-col items-center gap-0.5 ${cls(ROUTES.settings)}`}>
          <span className="text-lg">👤</span>
          <span className="text-[10px] font-medium">Profile</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;
