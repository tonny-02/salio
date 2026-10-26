import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F6F1E6] px-5 dark:bg-[#0B3B22]">
      <h1 className="text-2xl font-bold dark:text-white">Create your account</h1>
      <p className="mt-2 text-sm text-[#6D7A70]">
        Wire to template SignupForm / Supabase for real registration.
      </p>
      <Link
        href="/login"
        className="mt-6 text-sm font-medium text-[#177A3D] dark:text-[#F5DFA0]"
      >
        Already have an account? Log in
      </Link>
    </div>
  );
}
