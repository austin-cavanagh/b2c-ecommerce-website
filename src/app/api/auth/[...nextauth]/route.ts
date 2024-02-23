// 'use server';
import 'server-only';

import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import { prisma } from '../../../../../prisma/prisma';
import { compare } from 'bcrypt';

import Google from 'next-auth/providers/google';
import Facebook from 'next-auth/providers/facebook';
import Credentials from 'next-auth/providers/credentials';
import login from '@/functions/login';
import { request } from 'http';

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
      // name: 'Facebook',
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),

    Credentials({
      name: 'Credentials',

      credentials: {
        // email: { label: 'Email', type: 'email' },
        // curPassword: { label: 'Password', type: 'password' },
        username: { username: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials, req) {
        // console.log('REQUEST', req);
        console.log('CREDENTIALS', credentials);

        if (!credentials) {
          return null;
        }

        const { username, password } = credentials;

        console.log('USERNAME', username);
        console.log('PASSWORD', password);

        try {
          const user = await login(username, password);
          return user;
        } catch (err) {
          console.error(err);
          return null;
        }
      },
    }),
  ],

  // callbacks: {
  //   async signIn({ account, profile }) {
  //     console.log('SIGNIN CALLBACK');
  //     console.log(account);
  //     console.log(profile);
  //     let userPicture: string;
  //     if (account?.provider === 'facebook' && 'picture' in profile!) {
  //       userPicture = (profile as any).picture.data.url || '';
  //     } else {
  //       userPicture = (profile as any).picture || '';
  //     }
  //     let userEmail: string;
  //     if (profile?.email) {
  //       userEmail = profile?.email!;
  //     } else {
  //       const randomString = Math.random().toString(36).substring(2, 15);
  //       userEmail = `placeholder_${randomString}@example.com`;
  //     }
  //     // Upsert user information
  //     const user = await prisma.users.upsert({
  //       where: { email: profile?.email },
  //       create: {
  //         email: userEmail,
  //         name: profile?.name,
  //         picture: userPicture,
  //         // More fields can be added here as needed
  //       },
  //       update: {
  //         name: profile?.name,
  //         picture: userPicture,
  //         // Other fields to update
  //       },
  //     });
  //     // Upsert user authentication method
  //     // Ensure the providerId is available and construct a unique identifier for OAuth accounts
  //     const providerId = `${account?.provider}:${account?.providerAccountId}`;
  //     await prisma.userAuths.upsert({
  //       where: { providerId: providerId },
  //       create: {
  //         provider: account?.provider!,
  //         providerId: providerId,
  //         userId: user.id, // Link to the upserted user
  //         // Omitting password field as it's not relevant for OAuth
  //       },
  //       update: {
  //         // No fields to update in this case, but this block is required for upsert operation
  //       },
  //     });
  //     return true;
  //   },
  //   // session: ({ session, token }) => {
  //   //   return session;
  //   // },
  //   // user is only passed in the first time they login
  //   // Will not be present other logins so check if there is one
  //   //
  //   // jwt: ({ token, user }) => {
  //   //   if (user) {
  //   //     return {
  //   //       ...token,
  //   //       id: user.id,
  //   //       random: 'test',
  //   //     };
  //   //   }
  //   //   return token;
  //   // },
  // },

  pages: {
    signIn: '/sign-in',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
