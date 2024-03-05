/*
  Warnings:

  - The `customizations` column on the `CartItem` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `CustomizationOption` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `dimensions` to the `CartItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `CartItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CustomizationOption" DROP CONSTRAINT "CustomizationOption_productId_fkey";

-- AlterTable
ALTER TABLE "CartItem" ADD COLUMN     "dimensions" TEXT NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL,
DROP COLUMN "customizations",
ADD COLUMN     "customizations" JSONB;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "customizationOptions" JSONB;

-- DropTable
DROP TABLE "CustomizationOption";
