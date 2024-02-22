import { NextRequest } from 'next/server';
import { prisma } from '../../../../../prisma/prisma';

export default async function GET(
  request: NextRequest,
  { params }: { params: { token: string } },
) {
  const { token } = params;

  const verificationToken = await prisma.verifyUserTokens.findUnique({
    where: { token },
    include: { user: true },
  });

  if (!verificationToken) {
    // route to different page
    return;
  }

  await prisma.users.update({
    where: { id: verificationToken.userId },
    data: { verified: true },
  });

  await prisma.verifyUserTokens.update({
    where: { id: verificationToken.id },
    data: { verifiedAt: new Date() },
  });

  // route to somewhere
}
