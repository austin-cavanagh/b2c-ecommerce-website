'use server';
import 'server-only';

import { prisma } from '../../prisma/prisma';
import { hash } from 'bcrypt';
import { redirect } from 'next/navigation';
import sendEmailVerification from '@/functions/sendEmailVerification';

export default async function createAccount(
  prevState: unknown,
  formData: FormData,
) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const confirmPassword = formData.get('confirm-password') as string;

  // Check if passwords match
  if (password !== confirmPassword) {
    return {
      message: 'Passwords do not match',
    };
  }

  // Check if there is already an account with that email
  const existingUser = await prisma.users.findUnique({
    where: {
      email: email,
    },
  });

  if (existingUser) {
    return {
      message: 'An account with this email already exists',
    };
  }

  const hashedPassword = await hash(password, 12);

  // Create new user
  // const newUser = await prisma.users.create({
  //   data: {
  //     name: name,
  //     email: email,
  //     password: hashedPassword,
  //   },
  // });

  // redirect('/');

  sendEmailVerification(name, email);

  return {
    message: 'Account successfully created',
  };
}
