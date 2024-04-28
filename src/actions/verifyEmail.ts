// Verifies email

'use server';
import 'server-only';

import { redirect } from 'next/navigation';
import sendEmailVerification from '@/functions/sendEmailVerification';
import { randomUUID } from 'crypto';
import { prisma } from '@/prisma/prisma';

export default async function verifyEmail(id: string) {
  const intId = Number(id);

  const user = await prisma.user.findUnique({
    where: {
      id: intId,
    },
  });

  if (!user || !user.name || !user.email) return;

  const verificationToken = `${randomUUID()}${randomUUID()}`;

  // Create a new VerifyUserTokens entry
  await prisma.verifyUserToken.create({
    data: {
      userId: user.id,
      token: verificationToken,
    },
  });

  sendEmailVerification(user.name, user.email, verificationToken);
}
