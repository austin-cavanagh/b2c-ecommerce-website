'use server';
import 'server-only';

import { prisma } from '../prisma/prisma';
import { hash } from 'bcrypt';
import { redirect } from 'next/navigation';
import sendEmailVerification from '@/functions/sendEmailVerification';
import { randomUUID } from 'crypto';

export default async function createAccount(
  // prevState: unknown,
  formData: FormData,
) {
  // console.log(formData);

  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const hashedPassword = await hash(password, 12);
  let newUser;

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
    newUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
      },
    });

    // Create unique cart tied to the user
    const cart = await prisma.cart.create({
      data: {
        user: { connect: { id: newUser.id } },
      },
    });

    // Add cartId to the user data
    const userWithCart = await prisma.user.update({
      where: { id: newUser.id },
      data: { cartId: cart.id },
    });

    // console.log('userWithCart:', userWithCart);
    // console.log('CART:', cart);
    // console.log('CART:', cart);

    const verificationToken = `${randomUUID()}${randomUUID()}`;

    // Create or update the VerifyUserTokens entry
    await prisma.verifyUserToken.create({
      data: {
        userId: newUser.id,
        token: verificationToken,
      },
    });

    await sendEmailVerification(name, email, verificationToken);
  } catch (err) {
    if (err instanceof Error) {
      console.error('Error Creating Account:', err.message);
      throw new Error(err.message);
    } else {
      // Handle the case where err is not an Error object
      console.error('An unexpected error occurred:', err);
      throw new Error('An unexpected error occurred');
    }
  }

  redirect(`/create-account/verify-email/${newUser.id}`);
}
