'use server';

import { prisma } from '../../prisma/prisma';
import { hash } from 'bcrypt';

export default async function createAccount(formData: FormData) {
  const password = await hash(formData.get('password') as string, 12);

  // const newUser = await prisma.users.create({
  //   data: {
  //     name: formData.get('name') as string,
  //     email: formData.get('email') as string,
  //     password: password,
  //   },
  // });
}
