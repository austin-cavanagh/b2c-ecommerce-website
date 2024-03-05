'use server';
import 'server-only';

import { prisma } from '../prisma/prisma';
import { hash } from 'bcrypt';
import { redirect } from 'next/navigation';
import sendEmailVerification from '@/functions/sendEmailVerification';
import { randomUUID } from 'crypto';

export default async function createAccount(
  prevState: unknown,
  formData: FormData,
) {
  console.log(formData);

  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const hashedPassword = await hash(password, 12);

  try {
    // Check if there is already an account with that email
    const existingUser = await prisma.user.findUnique({
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
    const newUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
      },
    });

    // Create shopping cart and tie to new user
    const cart = await prisma.cart.create({
      data: {
        user: { connect: { id: newUser.id } },
      },
    });

    const verificationToken = `${randomUUID()}${randomUUID()}`;

    // Create or update the VerifyUserTokens entry
    await prisma.verifyUserToken.create({
      data: {
        userId: newUser.id,
        token: verificationToken,
      },
    });

    sendEmailVerification(name, email, verificationToken);

    redirect(`/create-account/verify-email/${newUser.id}`);
  } catch (err) {
    console.error('Error Creating Account:', err);
    throw new Error(err.message);
  }
}
