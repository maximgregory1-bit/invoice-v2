import { registerAction } from "@/actions/auth.actions";
import Link from "next/link";

export function SignUpForm() {
  return (
    <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.06] p-8 shadow-2xl backdrop-blur">
      <h1 className="text-center text-3xl font-bold text-white">
        Create account
      </h1>
      <p className="mt-2 text-center text-sm text-slate-400">
        Start building your project today
      </p>

      <form action={registerAction} className="mt-8 space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Full Name
          </label>
          <input
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
          />
        </div>

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
            minLength={6}
            placeholder="Minimum 6 characters"
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-500"
        >
          Sign up
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-400">
        Already have an account?{" "}
        <Link href="/signin" className="font-medium text-blue-400">
          Sign in
        </Link>
      </p>
    </div>
  );
}