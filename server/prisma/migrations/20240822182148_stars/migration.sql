/*
  Warnings:

  - The primary key for the `Star` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Star" DROP CONSTRAINT "Star_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ADD CONSTRAINT "Star_pkey" PRIMARY KEY ("userId", "postId");
DROP SEQUENCE "Star_id_seq";
