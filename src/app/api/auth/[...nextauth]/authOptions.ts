// Handles authentication through email, google oauth, and facebook oauth

// 'use server';
import 'server-only';

import { Account, NextAuthOptions, User } from 'next-auth';
import NextAuth from 'next-auth/next';

import Google from 'next-auth/providers/google';
import Facebook from 'next-auth/providers/facebook';
import Credentials from 'next-auth/providers/credentials';
import login from '@/functions/login';
import { prisma } from '@/prisma/prisma';
import { JWT } from 'next-auth/jwt';
import { ExtendSession } from './route';

interface ExtendUser extends User {
  cartId?: number;
  verified?: boolean;
}

interface ExtendJWT extends JWT {
  userId?: number;
  cartId?: number;
  verified?: boolean;
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },

  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),

    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        const { email, password } = credentials;

        try {
          const user = await login(email, password);
          return user;
        } catch (err) {
          console.error(err);
          throw err;
        }
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      // Email sign in
      if (account?.provider === 'credentials') {
        return true;
      }

      const dbUser = await prisma.user.findUnique({
        where: {
          email: user.email!,
        },
      });

      // Google sign in
      if (account?.provider === 'google') {
        console.log('GOOGLE SIGNIN');

        // New user
        if (!dbUser) {
          console.log('GOOGLE - NEW');

          // Create user
          const newUser = await prisma.user.create({
            data: {
              name: user.name,
              email: user.email,
              picture: user.image,
              verified: true,
            },
          });

          // Create shopping cart and tie to new user
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

          // Tie OAuth sign in provider to user
          await prisma.userAuth.create({
            data: {
              userId: newUser.id,
              provider: account.provider,
              providerId: `google:${user.id}`,
            },
          });

          return true;
        }

        // Returning user
        if (dbUser) {
          console.log('GOOGLE - RETURNING');

          // Check if user has signed in with google before
          const googleAuth = await prisma.userAuth.findFirst({
            where: {
              userId: dbUser.id,
              provider: 'google',
            },
          });

          // Returning user who has not signed in with google before
          if (!googleAuth) {
            console.log('GOOGLE - NEW GOOGLE');

            return false;
          }

          // Returning user who has signed in with google before
          if (googleAuth) {
            console.log('GOOGLE - OLD GOOGLE');

            return true;
          }
        }
      }

      // Facebook sign in
      if (account?.provider === 'facebook') {
        console.log('FACEBOOK SIGNIN');

        // New user
        if (!dbUser) {
          console.log('FACEBOOK - NEW');

          // Create user
          const newUser = await prisma.user.create({
            data: {
              name: user.name,
              email: user.email,
              picture: user.image,
              verified: true,
            },
          });

          // Create shopping cart and tie to new user
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

          // Tie OAuth sign in provider to user
          await prisma.userAuth.create({
            data: {
              userId: newUser.id,
              provider: account.provider,
              providerId: `facebook:${user.id}`,
            },
          });

          return true;
        }

        // Returning user
        if (dbUser) {
          console.log('FACEBOOK - RETURNING');

          // Check if user has signed in with facebook before
          const facebookAuth = await prisma.userAuth.findFirst({
            where: {
              userId: dbUser.id,
              provider: 'facebook',
            },
          });

          // Returning user who has not signed in with facebook before
          if (!facebookAuth) {
            console.log('FACEBOOK - NEW FACEBOOK');

            return false;
          }

          // Returning user who has signed in with facebook before
          if (facebookAuth) {
            console.log('FACEBOOK - OLD FACEBOOK');

            return true;
          }
        }
      }

      // If none of 3 methods above deny signin
      return false;
    },

    async redirect({ url, baseUrl }) {
      return baseUrl;
    },

    // The arguments user, account, profile and isNewUser are only passed the first time this
    // callback is called on a new session, after the user signs in. In subsequent calls, only
    // token will be available
    async jwt({ token, user }: { token: ExtendJWT; user: ExtendUser }) {
      // User, account, and profile are only returned at the start of the session
      if (user) {
        token.userId = Number(user.id);
        token.name = user.name;
        token.email = user.email;
        token.picture = user.image;
        token.cartId = user.cartId;
        token.verified = user.verified;
      }

      return token;
    },

    async session({
      session,
      token,
      // user,
    }: {
      session: ExtendSession;
      token: ExtendJWT;
    }) {
      if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.userId = token.userId;
        session.user.cartId = token.cartId;
      }

      return session;
    },
  },

  pages: {
    signIn: '/sign-in',
  },
};
