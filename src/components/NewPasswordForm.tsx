// Not yet implemented

'use client';

import { useFormState } from 'react-dom';
import PasswordInput from './sign-in/PasswordInput';
import { FormEvent, useRef } from 'react';
import createAccount from '@/actions/create-account/createAccount';

export default function NewPasswordForm() {
  const passwordRef = useRef<HTMLInputElement>(null);

  const haneleNewPassword = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form
      className="space-y-6"
      action="#"
      method="POST"
      onSubmit={haneleNewPassword}
    >
      {/* <div>{error.message}</div> */}

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          New Password
        </label>
        <PasswordInput passwordRef={passwordRef} />
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Reset Password
        </button>
      </div>
    </form>
  );
}
