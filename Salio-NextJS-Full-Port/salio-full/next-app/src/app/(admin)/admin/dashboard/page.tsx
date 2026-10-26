export default function AdminDashboardPage() {
  return (
    <div className="px-5 py-5">
      <h1 className="text-2xl font-bold dark:text-white">Good morning, Wanjiku</h1>
      <p className="text-sm text-[#6D7A70]">Here&apos;s how Salio is doing today</p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {[
          ["1,284", "Total students"],
          ["1,046", "Active this month"],
          ["87", "Statements today"],
          ["12", "Open tickets"],
        ].map(([v, l]) => (
          <div
            key={l}
            className="rounded-2xl border border-[#E9E2D0] bg-white p-4 dark:border-gray-700 dark:bg-[#15241A]"
          >
            <p className="text-2xl font-bold dark:text-white">{v}</p>
            <p className="text-sm text-[#6D7A70]">{l}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-2xl bg-[#E3F3E8] px-4 py-3 text-sm font-semibold text-[#177A3D] dark:bg-[#12532F] dark:text-[#A8E6C1]">
        All systems operational
      </div>
    </div>
  );
}
