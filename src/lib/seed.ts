import { Sexo } from "@prisma/client";
import { db } from "./prisma";

async function main() {
  try {
    const especieCachorro = await db.especie.create({
      data: {
        nome: "Cachorro",
        slug: "cachorro",
      },
    });

    const cachorros = [
      {
        nome: "Balão",
        slug: "balao",
        sexo: Sexo.MACHO,
        peso: 34,
        foto: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        especieId: especieCachorro.id,
      },
      {
        nome: "Pipa",
        slug: "pipa",
        sexo: Sexo.FEMEA,
        peso: 26,
        foto: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        especieId: especieCachorro.id,
      },
      {
        nome: "Pompidou",
        slug: "pompidou",
        sexo: Sexo.MACHO,
        peso: 30,
        foto: "https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        especieId: especieCachorro.id,
      },
    ];

    await db.animal.createMany({
      data: cachorros,
    });

    const especieGato = await db.especie.create({
      data: {
        nome: "Gato",
        slug: "gato",
      },
    });

    const gatos = [
      {
        nome: "Snowbell",
        slug: "snowbell",
        sexo: Sexo.MACHO,
        peso: 6,
        foto: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        especieId: especieGato.id,
      },
      {
        nome: "Docinho",
        slug: "docinho",
        sexo: Sexo.FEMEA,
        peso: 7,
        foto: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        especieId: especieGato.id,
      },
      {
        nome: "Pepeto",
        slug: "pepeto",
        sexo: Sexo.MACHO,
        peso: 8,
        foto: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        especieId: especieGato.id,
      },
    ];

    await db.animal.createMany({
      data: gatos,
    });

    console.log("Dados inseridos com sucesso!");
  } catch (error) {
    console.error("Erro ao inserir dados: ", error);
  } finally {
    await db.$disconnect();
  }
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
