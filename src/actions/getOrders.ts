'use server';
import 'server-only';

import { prisma } from '@/prisma/prisma';
import { getServerSession } from 'next-auth';
import { ExtendSession, authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function getOrders() {
  const session = (await getServerSession(authOptions)) as ExtendSession;
  const userId = session?.user?.userId; // Adjust this according to your session structure

  try {
    const orders = await prisma.order.findMany({
      where: {
        userId: userId,
        // DO NOT INCLUDE PENDING
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
                    imageSrc: true,
                    imageAlt: true,
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
