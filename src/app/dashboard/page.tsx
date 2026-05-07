import { auth } from "@/lib/auth";
import { SignOutButton } from "@/components/auth/SignOutButton";

export default async function DashboardPage() {
  const session = await auth();

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 shadow-2xl">
          <h1 className="text-3xl font-bold">Dashboard</h1>

          <p className="mt-4 text-slate-300">
            Welcome, {session?.user?.name || session?.user?.email}
          </p>

          <div className="mt-8">
            <SignOutButton />
          </div>
        </div>
      </div>
    </main>
  );
}