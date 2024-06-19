import { prisma } from '../prisma';

export async function clearUserData() {
  await prisma.cart.deleteMany({});
  await prisma.userAuth.deleteMany({});
  await prisma.verifyUserToken.deleteMany({});
  await prisma.user.deleteMany({});
  console.log('USER DATA CLEARED');
}
