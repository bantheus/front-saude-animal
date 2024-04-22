-- CreateTable
CREATE TABLE "Especie" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Especie_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Especie_nome_idx" ON "Especie"("nome");
