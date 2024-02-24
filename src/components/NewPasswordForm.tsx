'use client';

import createAccount from '@/actions/createAccount';
import { useFormState } from 'react-dom';
import PasswordInput from './PasswordInput';
import { FormEvent, useRef } from 'react';

export default function NewPasswordForm() {
  const [error, action] = useFormState(createAccount, { message: '' });
  const passwordRef = useRef<HTMLInputElement>(null);

  const haneleNewPassword = (event: FormEvent) => {
    event.preventDefault();

    // function to update the password
  };

  return (
    <form
      className="space-y-6"
      action="#"
      method="POST"
      onSubmit={haneleNewPassword}
    >
      <div>{error.message}</div>

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
