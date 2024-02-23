'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

function SignInButton() {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <button
        onClick={() => signOut()}
        className="rounded-md bg-indigo-600 px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Sign Out
      </button>
    );
  }

  return (
    <button
      onClick={() => signIn()}
      className="rounded-md bg-indigo-600 px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Sign In
    </button>
  );
}

export default SignInButton;
