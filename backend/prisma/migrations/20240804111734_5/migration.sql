/*
  Warnings:

  - Made the column `imageUrl` on table `books` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `books` MODIFY `imageUrl` VARCHAR(191) NOT NULL;
