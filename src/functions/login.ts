import { compare } from 'bcrypt';
import { prisma } from '../prisma/prisma';

async function login(email: string, password: string) {
  try {
    // Look up the user by email
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    // Check if their is an account associated to that email
    if (!user) {
      throw new Error('Incorrect email or password');
    }

    // Check if the user has been verified
    if (!user.verified) {
      throw new Error(
        'Account not verified, please check your email for the verification link to activate your account',
      );
    }

    // Compare the provided password with the stored hashed password
    const isValid = await compare(password, user.password as string);

    console.log('VALID', isValid);
    console.log('VALID', isValid);
    console.log('VALID', isValid);
    console.log('VALID', isValid);
    console.log('VALID', isValid);

    // Password does not match
    if (!isValid) {
      throw new Error('Incorrect email or password');
    }

    return {
      email,
    };
  } catch (err) {
    console.error('Authorization error', err);
    throw new Error(err.message);
  }
}

export default login;
