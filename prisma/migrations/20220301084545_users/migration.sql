/*
  Warnings:

  - You are about to drop the `members` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "members";

-- CreateTable
CREATE TABLE "member" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "dob" TEXT NOT NULL,

    CONSTRAINT "member_pkey" PRIMARY KEY ("id")
);
