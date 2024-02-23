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

  if (!user) return;

  const verificationToken = `${randomUUID()}${randomUUID()}`;

  // Create a new VerifyUserTokens entry
  await prisma.verifyUserTokens.create({
    data: {
      userId: user.id,
      token: verificationToken,
    },
  });

  sendEmailVerification(user.name, user.email, verificationToken);

  console.log('SENT');
}
