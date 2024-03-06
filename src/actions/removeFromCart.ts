'use server';

import 'server-only';
import { prisma } from '@/prisma/prisma';
import { revalidatePath } from 'next/cache';

export async function removeFromCart(itemId: number) {
  try {
    const deletedCartItem = await prisma.cartItem.delete({
      where: {
        id: itemId, // Use the item ID to identify the cart item to delete
      },
    });
    console.log('Deleted cart item:', deletedCartItem);

    revalidatePath('/cart');
  } catch (error) {
    console.error('Error removing cart item:', error);
    // Handle errors, such as item not found or database errors
    // You might want to return an error message or status
    // return { success: false, message: 'Failed to remove item from the cart.' };
  }
}
