/*
  Warnings:

  - You are about to drop the column `altText` on the `ImageUrl` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `ImageUrl` table. All the data in the column will be lost.
  - Added the required column `imageAlt` to the `ImageUrl` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `ImageUrl` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ImageUrl" DROP COLUMN "altText",
DROP COLUMN "url",
ADD COLUMN     "imageAlt" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL;
