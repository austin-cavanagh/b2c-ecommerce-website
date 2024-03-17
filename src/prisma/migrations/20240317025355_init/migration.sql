/*
  Warnings:

  - You are about to drop the column `tax` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `totalPrice` on the `Order` table. All the data in the column will be lost.
  - Added the required column `taxCost` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalCost` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "tax",
DROP COLUMN "totalPrice",
ADD COLUMN     "taxCost" INTEGER NOT NULL,
ADD COLUMN     "totalCost" INTEGER NOT NULL;
