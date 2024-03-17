/*
  Warnings:

  - A unique constraint covering the columns `[orderId]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `orderId` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "orderId" TEXT NOT NULL,
ADD COLUMN     "providerOrderId" TEXT,
ALTER COLUMN "paymentMethod" DROP NOT NULL,
ALTER COLUMN "tax" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Order_orderId_key" ON "Order"("orderId");
