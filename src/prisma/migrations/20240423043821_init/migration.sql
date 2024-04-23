-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "craftingStarted" TIMESTAMP(3),
ADD COLUMN     "deliveredAt" TIMESTAMP(3),
ADD COLUMN     "shippedAt" TIMESTAMP(3);
