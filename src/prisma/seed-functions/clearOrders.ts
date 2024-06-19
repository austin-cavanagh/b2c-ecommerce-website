import { prisma } from '../prisma';

export async function clearOrders() {
  const orderItems = await prisma.orderItem.deleteMany({});
  console.log(`Cleared ${orderItems.count} order items`);
  const orders = await prisma.order.deleteMany({});
  console.log(`Cleared ${orders.count} orders`);
}
