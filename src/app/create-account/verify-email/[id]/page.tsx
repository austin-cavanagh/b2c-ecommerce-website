'use server';

import emailsInLastMinute from '@/functions/emailsInLastMinute';
import { prisma } from '../../../../prisma/prisma';
import ResendEmailButton from '@/components/ResendEmailButton';

export default async function VerifyEmail({
  params,
}: {
  params: { id: string };
}) {
  const userId = Number(params.id);

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      email: true,
    },
  });

  const emailCount = await emailsInLastMinute(userId);
  const buttonDisabled = emailCount > 3;

  return (
    <main className="flex flex-1 px-6 py-6 sm:p-6">
      <div className="flex flex-1 flex-col items-center justify-center space-y-6">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Welcome!
        </h1>
        <p className="text-center text-base text-gray-600">
          An email was sent to <strong>{user?.email}</strong> please click the
          link inside to activate your account.
        </p>
        <p className="text-center text-base text-gray-600">
          If you do not see an email in your inbox you can send a new email
          below.
        </p>
        <ResendEmailButton id={params.id} disabled={buttonDisabled} />
      </div>
    </main>
  );
}
