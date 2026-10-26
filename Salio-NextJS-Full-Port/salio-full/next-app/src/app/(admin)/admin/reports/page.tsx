export default function ReportsPage() {
  return (
    <div className="bg-[#0B3B22] px-5 py-5 text-white min-h-screen">
      <h1 className="text-xl font-bold">Reports</h1>
      <p className="text-sm text-white/70">April 2025</p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {[
          ["1,284", "Total users"],
          ["1,965", "Statements processed"],
          ["842", "Budgets created"],
          ["1,137", "Savings goals"],
        ].map(([v, l]) => (
          <div key={l} className="rounded-2xl bg-[#12532F] p-4">
            <p className="text-2xl font-bold">{v}</p>
            <p className="text-sm text-white/70">{l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
