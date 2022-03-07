/*
  Warnings:

  - Added the required column `company_Id` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "company_Id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_company_Id_fkey" FOREIGN KEY ("company_Id") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
