'use server';

import { prisma } from '../../../../../prisma/prisma';
import ResendEmailButton from '@/components/ResendEmailButton';

export default async function VerifyEmail({
  params,
}: {
  params: { id: string };
}) {
  const user = await prisma.users.findUnique({
    where: {
      id: Number(params.id),
    },
    select: {
      email: true,
    },
  });

  const latestToken = await prisma.verifyUserTokens.findFirst({
    where: {
      userId: Number(params.id),
    },
  });

  let buttonDisabled = true;
  if (latestToken && latestToken.updatedAt) {
    const timeSinceLastEmail =
      new Date().getTime() - new Date(latestToken.updatedAt).getTime();
    buttonDisabled = timeSinceLastEmail < 30 * 1000; // 30 seconds
  }

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
