/*
  Warnings:

  - Made the column `altText` on table `ImageUrl` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ImageUrl" ALTER COLUMN "altText" SET NOT NULL;
