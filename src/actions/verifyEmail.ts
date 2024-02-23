'use server';
import 'server-only';

import { prisma } from '../../prisma/prisma';
import { redirect } from 'next/navigation';
import sendEmailVerification from '@/functions/sendEmailVerification';
import { randomUUID } from 'crypto';

export default async function verifyEmail(id: string) {
  const intId = Number(id);

  const user = await prisma.users.findUnique({
    where: {
      id: intId,
    },
  });

  const verificationToken = `${randomUUID()}${randomUUID()}`;

  // Create or update the VerifyUserTokens entry
  await prisma.verifyUserTokens.upsert({
    where: {
      userId: user.id,
    },
    update: {
      token: verificationToken,
    },
    create: {
      userId: user.id,
      token: verificationToken,
    },
  });

  const verifyUrl = `http://localhost:3000/api/verify-email/${verificationToken}`;

  sendEmailVerification(user?.name, user?.email, verifyUrl);
}
