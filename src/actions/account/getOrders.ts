'use server';
import 'server-only';

import { prisma } from '@/prisma/prisma';
import { getServerSession } from 'next-auth';
import { ExtendSession } from '@/app/api/auth/[...nextauth]/route';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';

export async function getOrders() {
  const session = (await getServerSession(authOptions)) as ExtendSession;
  const userId = session?.user?.userId; // Adjust this according to your session structure

  try {
    const orders = await prisma.order.findMany({
      where: {
        userId: userId,
        paymentStatus: {
          not: 'pending', // Exclude orders where paymentStatus is "pending"
        },
      },
      orderBy: {
        craftingStarted: 'desc',
      },
      include: {
        // Optional: Include user details if needed
        // user: true,
        orderItems: {
          include: {
            product: {
              select: {
                imageUrls: {
                  take: 1, // Only take the first image
                  select: {
                    src: true,
                    alt: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    return orders;
  } catch (error) {
    console.error('Failed to retrieve orders for user ID', userId, ':', error);
    throw error;
  }
}
