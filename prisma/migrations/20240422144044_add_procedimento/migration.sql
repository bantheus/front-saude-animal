-- CreateTable
CREATE TABLE "Procedimento" (
    "id" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "titulo" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "animalId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Procedimento_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Procedimento_data_idx" ON "Procedimento"("data");

-- CreateIndex
CREATE INDEX "Procedimento_titulo_idx" ON "Procedimento"("titulo");

-- AddForeignKey
ALTER TABLE "Procedimento" ADD CONSTRAINT "Procedimento_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE CASCADE ON UPDATE CASCADE;
