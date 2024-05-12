'use client';

import createAccount from '@/actions/createAccount';
import { useFormState } from 'react-dom';
import PasswordInput from '../sign-in/PasswordInput';
import { useSession } from 'next-auth/react';

export default function CreateAccountForm() {
  // const [error, action] = useFormState(createAccount, { message: '' });

  const session = useSession();
  console.log(session);

  return (
    // method="POST" <- look into what this was
    <form className="space-y-5" action={createAccount}>
      {/* <div>{error.message}</div> */}

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Name
        </label>
        <div className="mt-2">
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="block w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="block w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Password
        </label>
        <PasswordInput />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="bg-primary flex w-full justify-center rounded-full px-3 py-2 text-base font-semibold leading-6 text-white shadow-sm hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign up
        </button>
      </div>
    </form>
  );
}
