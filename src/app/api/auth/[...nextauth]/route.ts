// 'use server';
import 'server-only';

import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import { prisma } from '../../../../../prisma/prisma';
import { compare } from 'bcrypt';

import Google from 'next-auth/providers/google';
import Facebook from 'next-auth/providers/facebook';
import Credentials from 'next-auth/providers/credentials';

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
      name: 'Sign in',
      credentials: {
        email: { label: 'Email', type: 'email' },
        curPassword: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        console.log(credentials);

        const { email, curPassword } = credentials;

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
          const isValid = await compare(curPassword, user.password as string);

          if (!isValid) {
            // Password does not match
            throw new Error('Password is incorrect');
          }

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            picture: user.picture,
          };
        } catch (error) {
          console.error('Authorization error', error);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async signIn({ account, profile }) {
      console.log('RUNNING');

      console.log(account);
      console.log(profile);

      let userPicture: string;
      if (account?.provider === 'facebook' && 'picture' in profile!) {
        userPicture = (profile as any).picture.data.url || '';
      } else {
        userPicture = (profile as any).picture || '';
      }

      let userEmail: string;
      if (profile?.email) {
        userEmail = profile?.email!;
      } else {
        const randomString = Math.random().toString(36).substring(2, 15);
        userEmail = `placeholder_${randomString}@example.com`;
      }

      // Upsert user information
      const user = await prisma.users.upsert({
        where: { email: profile?.email },
        create: {
          email: userEmail,
          name: profile?.name,
          picture: userPicture,
          // More fields can be added here as needed
        },
        update: {
          name: profile?.name,
          picture: userPicture,
          // Other fields to update
        },
      });

      // Upsert user authentication method
      // Ensure the providerId is available and construct a unique identifier for OAuth accounts
      const providerId = `${account?.provider}:${account?.providerAccountId}`;

      await prisma.user_auths.upsert({
        where: { provider_id: providerId },
        create: {
          provider: account?.provider!,
          provider_id: providerId,
          user_id: user.id, // Link to the upserted user
          // Omitting password field as it's not relevant for OAuth
        },
        update: {
          // No fields to update in this case, but this block is required for upsert operation
        },
      });

      return true;
    },

    session: ({ session, token }) => {
      return session;
    },

    // user is only passed in the first time they login
    // Will not be present other logins so check if there is one
    //
    jwt: ({ token, user }) => {
      if (user) {
        return {
          ...token,
          id: user.id,
          random: 'test',
        };
      }

      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
