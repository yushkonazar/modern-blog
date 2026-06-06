"use client";

import { useAuth, SignInButton, UserButton } from "@clerk/nextjs";

export default function NavAuth() {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <UserButton />;
  }

  return (
    <SignInButton mode="modal">
      <button className="rounded-lg border border-slate-200 px-4 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:border-blue-500 hover:text-blue-600">
        Увійти
      </button>
    </SignInButton>
  );
}
