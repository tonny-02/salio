/** Admin users – metadata only (NFR-016: no financial data) */
const users = [
  { name: "Esther Japleting", status: "Active" },
  { name: "Brian Otieno", status: "Suspended" },
  { name: "Wanjiku Kamau", status: "Active" },
];

export default function AdminUsersPage() {
  return (
    <div className="px-5 py-5">
      <h1 className="text-xl font-bold dark:text-white">Manage Users</h1>
      <p className="text-sm text-[#6D7A70]">Counts and status only — no finances</p>
      <div className="mt-4 space-y-2">
        {users.map((u) => (
          <div
            key={u.name}
            className="flex justify-between rounded-2xl border border-[#E9E2D0] bg-white px-4 py-3 dark:border-gray-700 dark:bg-[#15241A]"
          >
            <span className="font-medium dark:text-white">{u.name}</span>
            <span className="text-sm text-[#6D7A70]">{u.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
