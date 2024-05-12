'use client';

import Link from 'next/link';
import signInAction from '@/actions/signInAction';
import { useFormState } from 'react-dom';
import { signIn, useSession } from 'next-auth/react';
import { FormEvent, useRef, useState } from 'react';
import PasswordInput from '@/components/sign-in/PasswordInput';

function SignIn() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>('');

  const handleGoogleClick = () => {
    signIn('google');
  };

  const handleFacebookClick = () => {
    signIn('facebook');
  };

  const handleSignIn = async (event: FormEvent) => {
    event.preventDefault();

    const result = await signIn('credentials', {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      redirect: false,
      callbackUrl: '/products',
    });

    setError(result?.error || 'An unexpected error occurred.');
  };

  return (
    <main className="flex h-full w-full flex-1 items-center justify-center px-6 py-6 sm:p-6">
      <div className="w-full max-w-96">
        <div className="rounded-3xl bg-white px-6 py-10 shadow-2xl sm:px-12">
          <h2 className="mb-4 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Log in
          </h2>

          <form
            className="space-y-4"
            action="#"
            method="POST"
            onSubmit={handleSignIn}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  ref={emailRef}
                  className="focus:ring-primary block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                {/* <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div> */}
              </div>
              <PasswordInput passwordRef={passwordRef} />
            </div>

            <div>
              <button
                type="submit"
                className="bg-primary focus-visible:outline-primary mt-6 flex w-full justify-center rounded-full px-3 py-2 text-base font-semibold leading-6 text-white shadow-sm hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Log in
              </button>
            </div>
          </form>

          <div className="relative my-2 flex justify-center text-sm font-bold leading-6">
            <span className="px-6 text-gray-900">OR</span>
          </div>

          {/* OAuth Options */}
          <div>
            <div className="space-y-2">
              {/* Facebook OAuth Link */}
              <a
                onClick={handleFacebookClick}
                className="flex w-full items-center justify-start gap-3 rounded-full bg-[#1676f2] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:brightness-90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0,0,256,256"
                  className="h-6 w-6"
                >
                  <g
                    fill="#ffffff"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    // style="mix-blend-mode: normal"
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"></path>
                    </g>
                  </g>
                </svg>
                <span className="flex-grow text-center text-base font-semibold leading-6">
                  Continue with Facebook
                </span>
              </a>

              {/* Google OAuth Link */}
              <a
                onClick={handleGoogleClick}
                className="flex w-full items-center justify-start gap-3 rounded-full bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:brightness-95 focus-visible:ring-transparent"
              >
                <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24">
                  <path
                    d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                    fill="#34A853"
                  />
                </svg>
                <span className="flex-grow text-center text-base font-semibold leading-6">
                  Continue with Google
                </span>
              </a>
            </div>
          </div>

          {/* Create Account Link */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link
              href="/create-account"
              className="hover:text-primary font-semibold leading-6 text-gray-900"
            >
              Sign up
            </Link>
          </p>
        </div>

        {/* Temporary element to display the error message on the screen */}
        {/* <strong>{error}</strong> */}
      </div>
    </main>
  );
}

export default SignIn;
