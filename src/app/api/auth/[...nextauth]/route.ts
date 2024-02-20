import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import Google from 'next-auth/providers/google';
import { prisma } from '../../../../../prisma/prisma';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (!profile?.email) {
        throw new Error('No email');
      }
      await prisma.users.upsert({
        where: {
          email: profile.email,
        },
        create: {
          email: profile.email,
          name: profile.name,
          image: profile.image,
        },
        update: {
          name: profile.name,
          image: profile.image,
        },
      });

      return true;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
