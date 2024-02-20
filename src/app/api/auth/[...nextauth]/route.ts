import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import { prisma } from '../../../../../prisma/prisma';

import Google from 'next-auth/providers/google';
import Facebook from 'next-auth/providers/facebook';

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
  ],

  callbacks: {
    async signIn({ account, profile }) {
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
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
