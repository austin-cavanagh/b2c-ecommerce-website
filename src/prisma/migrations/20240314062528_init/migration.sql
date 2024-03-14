/*
  Warnings:

  - Made the column `stripeId` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "stripeId" SET NOT NULL;
