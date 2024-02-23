'use client';

export default function VerifyEmail() {
  const handleResendEmail = async () => {
    console.log('Requesting a new verification email...');
  };

  return (
    <main className="flex flex-1 px-6 py-6 sm:p-6">
      <div className="flex flex-1 flex-col items-center justify-center space-y-6">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Verify Email
        </h1>
        <p className="text-center text-base text-gray-600">
          Check your email inbox and click the link to activate your account.
        </p>
        <button
          onClick={handleResendEmail}
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Email me a new link
        </button>
      </div>
    </main>
  );
}
