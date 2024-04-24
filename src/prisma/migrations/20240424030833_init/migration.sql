/*
  Warnings:

  - You are about to drop the column `deliveryMethod` on the `OrderItem` table. All the data in the column will be lost.
  - You are about to drop the column `orderStatus` on the `OrderItem` table. All the data in the column will be lost.
  - Added the required column `deliveryMethod` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderItemStatus` to the `OrderItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "deliveryMethod" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "OrderItem" DROP COLUMN "deliveryMethod",
DROP COLUMN "orderStatus",
ADD COLUMN     "orderItemStatus" TEXT NOT NULL;
