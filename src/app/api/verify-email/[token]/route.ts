import { NextRequest } from 'next/server';
import { prisma } from '../../../../../prisma/prisma';
import { redirect } from 'next/navigation';

export async function GET(
  request: NextRequest,
  { params }: { params: { token: string } },
) {
  const { token } = params;

  // Find the token record based on the provided token
  const verificationToken = await prisma.verifyUserTokens.findUnique({
    where: { token },
    include: { user: true },
  });

  // If no token found, it's invalid or expired
  if (!verificationToken) {
    redirect('/create-account/verification-token-expired');
  }

  // Find the most newest token for the user
  const newestToken = await prisma.verifyUserTokens.findFirst({
    where: { userId: verificationToken.userId },
    orderBy: { createdAt: 'desc' },
  });

  // Check if the found token is not the newest
  if (newestToken && verificationToken.token !== newestToken.token) {
    redirect('/create-account/verification-token-expired');
  }

  // Verify user if token is fresh
  await prisma.users.update({
    where: { id: verificationToken.userId },
    data: { verified: true },
  });

  // Verify the token
  await prisma.verifyUserTokens.update({
    where: { id: verificationToken.id },
    data: { verifiedAt: new Date() },
  });

  redirect('/sign-in');
}
