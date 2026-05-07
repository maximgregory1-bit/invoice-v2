import { signOutAction } from "@/actions/auth.actions";

export function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button
        type="submit"
        className="rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-500"
      >
        Sign out
      </button>
    </form>
  );
}