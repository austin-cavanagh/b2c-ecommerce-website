/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `VerifyUserTokens` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "VerifyUserTokens_userId_key" ON "VerifyUserTokens"("userId");
