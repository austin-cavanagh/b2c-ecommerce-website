'use server';
import { signIn } from 'next-auth/react';
import 'server-only';

export default async function signInAction(
  prevState: unknown,
  formData: FormData,
) {
  const email = formData.get('email') as string;
  const curPassword = formData.get('password') as string;

  await signIn('credentials', {
    username: email,
    curPassword: curPassword,
    // redirect: true,
    // callbackUrl: '/',
  });

  console.log('TESTING TESTIN');

  return { message: '' };
}
