'use server';
import 'server-only';

export default async function emailsInLastMinute(userId: number) {
  const oneMinuteAgo = new Date(Date.now() - 60 * 1000);
  const recentTokens = await prisma.verifyUserToken.findMany({
    where: {
      userId: userId,
      createdAt: {
        gte: oneMinuteAgo,
      },
    },
  });

  return recentTokens.length;
}
