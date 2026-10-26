import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0B3B22] px-5">
      <img
        src="/salio-logo.jpg"
        alt="Salio"
        className="h-20 w-20 rounded-2xl object-cover"
      />
      <h1 className="mt-4 text-2xl font-bold text-white">Salio</h1>
      <p className="text-sm text-white/70">Save smarter. Reach your goals.</p>
      <div className="mt-8 w-full max-w-sm rounded-2xl bg-[#F6F1E6] p-6 dark:bg-[#15241A]">
        <h2 className="text-lg font-semibold dark:text-white">Welcome back</h2>
        <p className="text-sm text-[#6D7A70]">
          Use your template login (demo@example.com) or wire to Supabase Auth.
        </p>
        <Link
          href="/dashboard"
          className="mt-4 block w-full rounded-xl bg-[#12532F] py-3 text-center font-semibold text-white"
        >
          Continue to app
        </Link>
      </div>
      <Link href="/signup" className="mt-4 text-sm text-[#F5DFA0]">
        Create account
      </Link>
    </div>
  );
}
