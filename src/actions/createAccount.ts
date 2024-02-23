'use server';
import 'server-only';

import { prisma } from '../../prisma/prisma';
import { hash } from 'bcrypt';
import { redirect } from 'next/navigation';
import sendEmailVerification from '@/functions/sendEmailVerification';
import { randomUUID } from 'crypto';

export default async function createAccount(
  prevState: unknown,
  formData: FormData,
) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const hashedPassword = await hash(password, 12);

  // Check if there is already an account with that email
  const existingUser = await prisma.users.findUnique({
    where: {
      email: email,
    },
  });

  if (existingUser && existingUser.verified) {
    return {
      message: 'An account with this email already exists',
    };
  }

  if (existingUser && !existingUser.verified) {
    return {
      message: 'An account with this email already but is unverified',
    };
  }

  // Create new user
  const newUser = await prisma.users.create({
    data: {
      name: name,
      email: email,
      password: hashedPassword,
    },
  });

  const verificationToken = `${randomUUID()}${randomUUID()}`;

  // Create or update the VerifyUserTokens entry
  await prisma.verifyUserTokens.upsert({
    where: {
      userId: newUser.id,
    },
    update: {
      token: verificationToken,
    },
    create: {
      userId: newUser.id,
      token: verificationToken,
    },
  });

  const verifyUrl = `http://localhost:3000/api/verify-email/${verificationToken}`;

  sendEmailVerification(name, email, verifyUrl);

  redirect(`/create-account/verify-email/${newUser.id}`);
}
