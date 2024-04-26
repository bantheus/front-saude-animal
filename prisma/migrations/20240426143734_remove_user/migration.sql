/*
  Warnings:

  - You are about to drop the column `userId` on the `Consulta` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Procedimento` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Vacina` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Consulta" DROP CONSTRAINT "Consulta_userId_fkey";

-- DropForeignKey
ALTER TABLE "Procedimento" DROP CONSTRAINT "Procedimento_userId_fkey";

-- DropForeignKey
ALTER TABLE "Vacina" DROP CONSTRAINT "Vacina_userId_fkey";

-- AlterTable
ALTER TABLE "Consulta" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "Procedimento" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "Vacina" DROP COLUMN "userId";
