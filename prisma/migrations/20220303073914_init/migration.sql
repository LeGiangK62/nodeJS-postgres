/*
  Warnings:

  - Added the required column `company_Id` to the `department` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "department" ADD COLUMN     "company_Id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "department" ADD CONSTRAINT "department_company_Id_fkey" FOREIGN KEY ("company_Id") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
