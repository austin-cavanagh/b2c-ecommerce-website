// 'use server';
import 'server-only';

import { Account, NextAuthOptions, Profile, Session } from 'next-auth';
import NextAuth from 'next-auth/next';

import Google from 'next-auth/providers/google';
import Facebook from 'next-auth/providers/facebook';
import Credentials from 'next-auth/providers/credentials';
import login from '@/functions/login';
import { prisma } from '@/prisma/prisma';
import { JWT } from 'next-auth/jwt';
import { authOptions } from './authOptions';

export interface ExtendSession extends Session {
  user?: {
    userId?: number;
    cartId?: number;
    verified?: boolean;
  } & Session['user'];
}

// export const authOptions: NextAuthOptions = {
//   session: {
//     strategy: 'jwt',
//   },

//   providers: [
//     Google({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//     Facebook({
//       clientId: process.env.FACEBOOK_CLIENT_ID!,
//       clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
//     }),

//     Credentials({
//       credentials: {
//         email: { label: 'Email', type: 'email' },
//         password: { label: 'Password', type: 'password' },
//       },

//       async authorize(credentials) {
//         // console.log('AUTHORIZE');

//         // console.log('CREDENTIALS', credentials);

//         if (!credentials) {
//           return null;
//         }

//         const { email, password } = credentials;

//         try {
//           const user = await login(email, password);
//           // console.log('AUTHORIZE', user);
//           return user;
//         } catch (err) {
//           console.error(err);
//           throw err;
//         }
//       },
//     }),
//   ],

//   callbacks: {
//     async signIn({ user, account }) {
//       // console.log('SIGNIN CALLBACK');

//       // Email sign in
//       if (account?.provider === 'credentials') {
//         // console.log('EMAIL SIGNIN');
//         return true;
//       }

//       // console.log('USER', user);
//       // console.log('ACCOUNT', account);

//       const dbUser = await prisma.user.findUnique({
//         where: {
//           email: user.email!,
//         },
//       });

//       // Google sign in
//       if (account?.provider === 'google') {
//         console.log('GOOGLE SIGNIN');

//         // New user
//         if (!dbUser) {
//           console.log('GOOGLE - NEW');

//           // Create user
//           const newUser = await prisma.user.create({
//             data: {
//               name: user.name,
//               email: user.email,
//               picture: user.image,
//               verified: true,
//             },
//           });

//           // Create shopping cart and tie to new user
//           const cart = await prisma.cart.create({
//             data: {
//               user: { connect: { id: newUser.id } },
//             },
//           });

//           // Add cartId to the user data
//           const userWithCart = await prisma.user.update({
//             where: { id: newUser.id },
//             data: { cartId: cart.id },
//           });

//           // Tie OAuth sign in provider to user
//           await prisma.userAuth.create({
//             data: {
//               userId: newUser.id,
//               provider: account.provider,
//               providerId: `google:${user.id}`,
//             },
//           });

//           return true;
//         }

//         // Returning user
//         if (dbUser) {
//           console.log('GOOGLE - RETURNING');

//           // Check if user has signed in with google before
//           const googleAuth = await prisma.userAuth.findFirst({
//             where: {
//               userId: dbUser.id,
//               provider: 'google',
//             },
//           });

//           // Returning user who has not signed in with google before
//           if (!googleAuth) {
//             console.log('GOOGLE - NEW GOOGLE');

//             return false;
//           }

//           // Returning user who has signed in with google before
//           if (googleAuth) {
//             console.log('GOOGLE - OLD GOOGLE');

//             return true;
//           }
//         }
//       }

//       // Facebook sign in
//       if (account?.provider === 'facebook') {
//         console.log('FACEBOOK SIGNIN');

//         // New user
//         if (!dbUser) {
//           console.log('FACEBOOK - NEW');

//           // Create user
//           const newUser = await prisma.user.create({
//             data: {
//               name: user.name,
//               email: user.email,
//               picture: user.image,
//               verified: true,
//             },
//           });

//           // Create shopping cart and tie to new user
//           const cart = await prisma.cart.create({
//             data: {
//               user: { connect: { id: newUser.id } },
//             },
//           });

//           // Add cartId to the user data
//           const userWithCart = await prisma.user.update({
//             where: { id: newUser.id },
//             data: { cartId: cart.id },
//           });

//           // Tie OAuth sign in provider to user
//           await prisma.userAuth.create({
//             data: {
//               userId: newUser.id,
//               provider: account.provider,
//               providerId: `facebook:${user.id}`,
//             },
//           });

//           return true;
//         }

//         // Returning user
//         if (dbUser) {
//           console.log('FACEBOOK - RETURNING');

//           // Check if user has signed in with facebook before
//           const facebookAuth = await prisma.userAuth.findFirst({
//             where: {
//               userId: dbUser.id,
//               provider: 'facebook',
//             },
//           });

//           // Returning user who has not signed in with facebook before
//           if (!facebookAuth) {
//             console.log('FACEBOOK - NEW FACEBOOK');

//             return false;
//           }

//           // Returning user who has signed in with facebook before
//           if (facebookAuth) {
//             console.log('FACEBOOK - OLD FACEBOOK');

//             return true;
//           }
//         }
//       }

//       // If none of 3 methods above deny signin
//       return false;
//     },

//     async redirect({ url, baseUrl }) {
//       // console.log('REDIRECT CALLBACK');

//       // console.log('URL', url);
//       // console.log('BASEURL', baseUrl);

//       return baseUrl;
//     },

//     // The arguments user, account, profile and isNewUser are only passed the first time this
//     // callback is called on a new session, after the user signs in. In subsequent calls, only
//     // token will be available
//     async jwt({
//       token,
//       user,
//       // account,
//       // profile,
//     }: {
//       token: ExtendJWT;
//       user: ExtendUser;
//       // account: Account;
//       // profile?: Profile;
//     }) {
//       // console.log('JWT CALLBACK');

//       // console.log('JWT - TOKEN', token);
//       // console.log('JWT - USER', user);
//       // console.log('JWT - ACCOUNT', account);
//       // console.log('JWT - PROFILE', profile);

//       // const provider = account.provider;

//       // User, account, and profile are only returned at the start of the session
//       if (user) {
//         token.userId = Number(user.id);
//         token.name = user.name;
//         token.email = user.email;
//         token.picture = user.image;
//         token.cartId = user.cartId;
//         token.verified = user.verified;
//       }

//       return token;
//     },

//     async session({
//       session,
//       token,
//       // user,
//     }: {
//       session: ExtendSession;
//       token: ExtendJWT;
//     }) {
//       // console.log('SESSION CALLBACK');

//       // console.log('SESSION BEFORE - SESSION', session);
//       // console.log('SESSION - TOKEN', token);
//       // console.log('SESSION - USER', user);

//       if (session.user) {
//         session.user.name = token.name;
//         session.user.email = token.email;
//         // session.user.image = token.picture;
//         session.user.userId = token.userId;
//         session.user.cartId = token.cartId;
//         // session.user.verified = token.verified;
//       }

//       // console.log('SESSION AFTER - SESSION', session);

//       return session;
//     },
//   },

//   pages: {
//     signIn: '/sign-in',
//   },
// };

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
