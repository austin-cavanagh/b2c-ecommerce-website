import { compare } from 'bcrypt';
import { prisma } from '../../prisma/prisma';

async function login(email: string, password: string) {
  try {
    // Look up the user by email
    const user = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });

    // Check if their is an account associated to that email
    if (!user) {
      throw new Error('No user found with the email');
    }

    // Check if the user has been verified
    if (!user.verified) {
      throw new Error(
        'User account is not verified. Please check your email for the verification link.',
      );
    }

    // Compare the provided password with the stored hashed password
    const isValid = await compare(password, user.password as string);

    if (!isValid) {
      // Password does not match
      throw new Error('Password is incorrect');
    }

    return {
      email,
    };
  } catch (error) {
    console.error('Authorization error', error);
    return null;
  }
}

export default login;
