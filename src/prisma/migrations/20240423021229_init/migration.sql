/*
  Warnings:

  - You are about to drop the column `deliveryMethod` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `orderStatus` on the `Order` table. All the data in the column will be lost.
  - Added the required column `deliveryMethod` to the `OrderItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderStatus` to the `OrderItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "deliveryMethod",
DROP COLUMN "orderStatus";

-- AlterTable
ALTER TABLE "OrderItem" ADD COLUMN     "deliveryMethod" TEXT NOT NULL,
ADD COLUMN     "orderStatus" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
