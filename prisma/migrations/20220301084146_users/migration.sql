/*
  Warnings:

  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Users";

-- CreateTable
CREATE TABLE "members" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "dob" TEXT NOT NULL,

    CONSTRAINT "members_pkey" PRIMARY KEY ("id")
);
