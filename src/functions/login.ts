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

    // Password does not match
    if (!isValid) {
      throw new Error('Incorrect email or password');
    }

    const id = user.id;
    const name = user.name;
    const cartId = user.cartId;
    const verified = user.verified;
    const picture = user.picture;

    // const userData = {
    //   email: email,
    //   id: user.id,
    //   name: user.name,
    //   cardId: user.cartId

    // }

    return {
      email,
      id,
      name,
      cartId,
      verified,
      picture,
    };
  } catch (err) {
    console.error('Authorization error:', (err as Error).message);
    throw new Error((err as Error).message);
  }
}

export default login;
