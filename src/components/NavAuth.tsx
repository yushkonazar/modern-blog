"use client";

import { useAuth, useClerk, UserButton } from "@clerk/nextjs";

export default function NavAuth() {
  const { isSignedIn, isLoaded } = useAuth();
  const { openSignIn } = useClerk();

  if (!isLoaded) return <div className="w-20 h-8" />;

  if (isSignedIn) {
    return <UserButton />;
  }

  return (
    <button
      onClick={() => openSignIn({})}
      className="rounded-lg border border-slate-200 px-4 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:border-blue-500 hover:text-blue-600"
    >
      Увійти
    </button>
  );
}
