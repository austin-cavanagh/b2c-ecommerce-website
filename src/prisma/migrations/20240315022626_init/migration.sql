/*
  Warnings:

  - Added the required column `stripePriceId` to the `CartItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CartItem" ADD COLUMN     "stripePriceId" TEXT NOT NULL;
