import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import Google from 'next-auth/providers/google';

const GOOGLE_CLIENT_ID: string = process.env.GOOGLE_CLIENT_ID!;
console.log(GOOGLE_CLIENT_ID);

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    Google({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
