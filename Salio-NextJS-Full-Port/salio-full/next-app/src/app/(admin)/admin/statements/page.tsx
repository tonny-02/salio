export default function AdminStatementsPage() {
  return (
    <div className="px-5 py-5">
      <h1 className="text-xl font-bold dark:text-white">Statement monitoring</h1>
      <p className="text-sm text-[#6D7A70]">Metadata only — no file contents (NFR-016)</p>
      <div className="mt-4 space-y-2">
        {["Processed", "Failed", "Processing"].map((s, i) => (
          <div
            key={s}
            className="flex justify-between rounded-xl border border-[#E9E2D0] bg-white px-4 py-3 dark:border-gray-700 dark:bg-[#15241A]"
          >
            <span className="dark:text-white">Upload #{i + 1}</span>
            <span className="text-sm text-[#6D7A70]">{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
