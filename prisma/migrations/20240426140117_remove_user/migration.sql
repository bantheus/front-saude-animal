/*
  Warnings:

  - Added the required column `userId` to the `Consulta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Procedimento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Vacina` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Consulta" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Procedimento" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Vacina" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Consulta" ADD CONSTRAINT "Consulta_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vacina" ADD CONSTRAINT "Vacina_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Procedimento" ADD CONSTRAINT "Procedimento_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
