/*
  Warnings:

  - Added the required column `stripePriceId` to the `ProductPrice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProductPrice" ADD COLUMN     "stripePriceId" TEXT NOT NULL;
