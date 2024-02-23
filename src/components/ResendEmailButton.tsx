'use client';

import { useState } from 'react';
import verifyEmail from '@/actions/verifyEmail';

export default function ResendEmailButton({
  id,
  disabled,
}: {
  id: string;
  disabled: boolean;
}) {
  const [isClicked, setIsClicked] = useState(false);
  const buttonDisabled = isClicked || disabled;

  const handleClick = async () => {
    setIsClicked(true);
    await verifyEmail(id);
  };

  console.log(disabled);

  return (
    <>
      <button
        onClick={handleClick}
        disabled={buttonDisabled}
        className={`rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${buttonDisabled ? 'bg-indigo-300' : 'bg-indigo-600 hover:bg-indigo-500'}`}
      >
        {!isClicked ? 'Email me a new link' : 'Email sent'}
      </button>
    </>
  );
}
