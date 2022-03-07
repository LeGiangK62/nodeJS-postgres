/*
  Warnings:

  - The primary key for the `member` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `member` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to alter the column `name` on the `member` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `email` on the `member` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `dob` on the `member` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(10)`.

*/
-- AlterTable
ALTER TABLE "member" DROP CONSTRAINT "member_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "email" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "dob" SET DATA TYPE VARCHAR(10),
ADD CONSTRAINT "member_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "company" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL
);

-- CreateTable
CREATE TABLE "department" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL
);

-- CreateTable
CREATE TABLE "result" (
    "id" SERIAL NOT NULL,
    "time" TIME(6) NOT NULL,
    "user_Id" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "company_id_key" ON "company"("id");

-- CreateIndex
CREATE UNIQUE INDEX "department_id_key" ON "department"("id");

-- CreateIndex
CREATE UNIQUE INDEX "result_id_key" ON "result"("id");
