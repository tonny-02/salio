export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F6F1E6] dark:bg-[#0B3B22]">
      <header className="flex items-center gap-2 bg-[#0B3B22] px-5 py-3 text-white">
        <img src="/salio-logo.jpg" alt="" className="h-8 w-8 rounded-lg object-cover" />
        <span className="font-semibold">Salio Admin</span>
      </header>
      <main className="mx-auto max-w-md pb-8">{children}</main>
    </div>
  );
}
