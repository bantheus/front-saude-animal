-- CreateTable
CREATE TABLE "Consulta" (
    "id" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "hora" TIMESTAMP(3) NOT NULL,
    "titulo" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "animalId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Consulta_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Consulta_data_idx" ON "Consulta"("data");

-- CreateIndex
CREATE INDEX "Consulta_titulo_idx" ON "Consulta"("titulo");

-- AddForeignKey
ALTER TABLE "Consulta" ADD CONSTRAINT "Consulta_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE CASCADE ON UPDATE CASCADE;
