/*
  Warnings:

  - You are about to drop the column `quantity` on the `CartItem` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `height` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `width` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `Color` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `craftingTime` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Made the column `shortDescription` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `longDescription` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_productId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_productId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_categoryId_fkey";

-- AlterTable
ALTER TABLE "CartItem" DROP COLUMN "quantity";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "categoryId",
DROP COLUMN "height",
DROP COLUMN "imageUrl",
DROP COLUMN "price",
DROP COLUMN "width",
ADD COLUMN     "craftingTime" INTEGER NOT NULL,
ALTER COLUMN "shortDescription" SET NOT NULL,
ALTER COLUMN "longDescription" SET NOT NULL;

-- DropTable
DROP TABLE "Color";

-- CreateTable
CREATE TABLE "ProductCategory" (
    "productId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "ProductCategory_pkey" PRIMARY KEY ("productId","categoryId")
);

-- CreateTable
CREATE TABLE "CustomizationOption" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "option" TEXT NOT NULL,

    CONSTRAINT "CustomizationOption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductPrice" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "dimension" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "ProductPrice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImageUrl" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "altText" TEXT,

    CONSTRAINT "ImageUrl_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductCategory" ADD CONSTRAINT "ProductCategory_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductCategory" ADD CONSTRAINT "ProductCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomizationOption" ADD CONSTRAINT "CustomizationOption_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductPrice" ADD CONSTRAINT "ProductPrice_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImageUrl" ADD CONSTRAINT "ImageUrl_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
