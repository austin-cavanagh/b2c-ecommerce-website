import { NextRequest } from 'next/server';
import { prisma } from '../../../../prisma/prisma';
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

  // Redirect if token does not exist in database
  if (!verificationToken) {
    redirect('/create-account/verification-link-expired');
  }

  const ONE_DAY = 24 * 60 * 60 * 1000;
  const currentTimeUtc = new Date(Date.now());
  const tokenCreationTimeUtc = new Date(verificationToken.createdAt);
  const timeSinceCreation =
    currentTimeUtc.getTime() - tokenCreationTimeUtc.getTime();

  // Redirect if token is older than 24 horus
  if (timeSinceCreation > ONE_DAY) {
    return redirect('/create-account/verification-link-expired');
  }

  // Find the newest token for the user
  const newestToken = await prisma.verifyUserTokens.findFirst({
    where: { userId: verificationToken.userId },
    orderBy: { createdAt: 'desc' },
  });

  // Redicect if token is not the newest created for that user
  if (newestToken && verificationToken.token !== newestToken.token) {
    redirect('/create-account/verification-link-expired');
  }

  // Verify user
  await prisma.users.update({
    where: { id: verificationToken.userId },
    data: { verified: true },
  });

  // Verify token
  await prisma.verifyUserTokens.update({
    where: { id: verificationToken.id },
    data: { verifiedAt: new Date() },
  });

  // Redirect to the sign in page
  redirect('/sign-in');
}
