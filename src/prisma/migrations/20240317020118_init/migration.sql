/*
  Warnings:

  - Added the required column `totalCost` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Made the column `tax` on table `Order` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "totalCost" INTEGER NOT NULL,
ALTER COLUMN "tax" SET NOT NULL;
