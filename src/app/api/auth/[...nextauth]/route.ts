// 'use server';
import 'server-only';

import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';

import Google from 'next-auth/providers/google';
import Facebook from 'next-auth/providers/facebook';
import Credentials from 'next-auth/providers/credentials';
import login from '@/functions/login';

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
        // console.log('CREDENTIALS', credentials);

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
      // console.log('USER', user);
      // console.log('ACCOUNT', account);

      const dbUser = await prisma.users.findUnique({
        where: {
          email: user.email,
        },
      });

      // Google sign in
      if (account?.provider === 'google') {
        console.log('GOOGLE');

        // New user
        if (!dbUser) {
          console.log('GOOGLE - NEW');

          // Create user
          const newUser = await prisma.users.create({
            data: {
              name: user.name,
              email: user.email,
              picture: user.image,
              verified: true,
            },
          });

          // Tie OAuth sign in provider to user
          await prisma.userAuths.create({
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
          const googleAuth = await prisma.userAuths.findFirst({
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
        console.log('FACEBOOK');

        // New user
        if (!dbUser) {
          console.log('FACEBOOK - NEW');

          // Create user
          const newUser = await prisma.users.create({
            data: {
              name: user.name,
              email: user.email,
              picture: user.image,
              verified: true,
            },
          });

          // Tie OAuth sign in provider to user
          await prisma.userAuths.create({
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
          const facebookAuth = await prisma.userAuths.findFirst({
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

      console.log(account);

      // Email sign in
      if (account?.provider === 'credentials') {
        console.log('email');

        return true;
      }
    },

    async redirect({ url, baseUrl }) {
      // console.log('URL', url);
      // console.log('BASEURL', baseUrl);

      return baseUrl;
    },
  },

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
