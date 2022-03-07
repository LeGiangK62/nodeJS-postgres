/*
  Warnings:

  - You are about to drop the column `company_Id` on the `user` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_company_Id_fkey";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "company_Id";
