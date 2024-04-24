/*
  Warnings:

  - The `customizations` column on the `CartItem` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "CartItem" DROP COLUMN "customizations",
ADD COLUMN     "customizations" JSONB[];
