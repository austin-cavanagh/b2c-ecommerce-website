import { Account, NextAuthOptions, Profile } from 'next-auth';
import NextAuth from 'next-auth/next';
import { prisma } from '../../../../../prisma/prisma';

import Google from 'next-auth/providers/google';
import Facebook from 'next-auth/providers/facebook';
import Instagram from 'next-auth/providers/instagram';

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
    Instagram({
      clientId: process.env.INSTAGRAM_CLIENT_ID!,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async signIn({ account, profile }) {
      console.log('account', account);
      console.log('profile', profile);

      if (!profile?.email) {
        throw new Error('No email');
      }

      await prisma.users.upsert({
        where: {
          email: profile.email,
        },
        create: {
          email: profile.email,
          provider: account.provider,
          name: profile.name,
          given_name: profile.given_name,
          family_name: profile.family_name,
          picture: profile.picture,
        },
        update: {
          name: profile.name,
          given_name: profile.given_name,
          family_name: profile.family_name,
          picture: profile.picture,
        },
      });

      return true;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
