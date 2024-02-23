import { NextRequest } from 'next/server';
import { prisma } from '../../../../../prisma/prisma';
import { redirect } from 'next/navigation';

export async function GET(
  request: NextRequest,
  { params }: { params: { token: string } },
) {
  const { token } = params;

  const verificationToken = await prisma.verifyUserTokens.findUnique({
    where: { token },
    include: { user: true },
  });

  if (!verificationToken) {
    redirect('/create-account/verification-token-expired');
  }

  await prisma.users.update({
    where: { id: verificationToken.userId },
    data: { verified: true },
  });

  await prisma.verifyUserTokens.update({
    where: { id: verificationToken.id },
    data: { verifiedAt: new Date() },
  });

  redirect('/sign-in');
}
