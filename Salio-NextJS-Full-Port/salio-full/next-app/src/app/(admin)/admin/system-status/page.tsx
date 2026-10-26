const services = [
  { name: "Statement processing", status: "Down" },
  { name: "Database", status: "Operational" },
  { name: "File storage", status: "Operational" },
  { name: "Sign-in service", status: "Operational" },
  { name: "Notifications", status: "Degraded" },
];

export default function SystemStatusPage() {
  return (
    <div className="px-5 py-5">
      <h1 className="text-xl font-bold dark:text-white">System Status</h1>
      <div className="mt-4 space-y-2">
        {services.map((s) => (
          <div
            key={s.name}
            className="flex justify-between rounded-2xl border border-[#E9E2D0] bg-white px-4 py-3 dark:border-gray-700 dark:bg-[#15241A]"
          >
            <span className="font-medium dark:text-white">{s.name}</span>
            <span className="text-sm text-[#6D7A70]">{s.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
