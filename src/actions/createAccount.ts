import { prisma } from '../../prisma/prisma';

// const bcrypt = require('bcrypt');

import { hash } from 'bcrypt';

export default async function createAccount(formData: FormData) {
  'use server';

  const password = await hash(formData.get('password') as string, 12);

  console.log(password);

  // const newUser = await prisma.users.create({
  //   data: {
  //     name: formData.get('name') as string,
  //     email: formData.get('email') as string,
  //     password: password,
  //   },
  // });

  return;
}
