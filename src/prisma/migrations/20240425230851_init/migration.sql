/*
  Warnings:

  - You are about to drop the column `imageAlt` on the `ImageUrl` table. All the data in the column will be lost.
  - You are about to drop the column `imageSrc` on the `ImageUrl` table. All the data in the column will be lost.
  - Added the required column `alt` to the `ImageUrl` table without a default value. This is not possible if the table is not empty.
  - Added the required column `src` to the `ImageUrl` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ImageUrl" DROP COLUMN "imageAlt",
DROP COLUMN "imageSrc",
ADD COLUMN     "alt" TEXT NOT NULL,
ADD COLUMN     "src" TEXT NOT NULL;
