import {
  credentialsSignInAction,
  googleSignInAction,
} from "@/actions/auth.actions";
import Link from "next/link";

export function SignInForm() {
  return (
    <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.06] p-8 shadow-2xl backdrop-blur">
      <h1 className="text-center text-3xl font-bold text-white">Welcome back</h1>
      <p className="mt-2 text-center text-sm text-slate-400">
        Sign in to continue to your dashboard
      </p>

      <form action={googleSignInAction} className="mt-8">
        <button
          type="submit"
          className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
        >
          Continue with Google
        </button>
      </form>

      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-white/10" />
        <span className="text-xs text-slate-500">OR</span>
        <div className="h-px flex-1 bg-white/10" />
      </div>

      <form action={credentialsSignInAction} className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Password
          </label>
          <input
            name="password"
            type="password"
            required
            placeholder="••••••••"
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-500"
        >
          Sign in
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-400">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="font-medium text-blue-400">
          Sign up
        </Link>
      </p>
    </div>
  );
}