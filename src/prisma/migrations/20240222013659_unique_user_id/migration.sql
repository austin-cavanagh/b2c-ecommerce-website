/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `UserAuths` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserAuths_userId_key" ON "UserAuths"("userId");
