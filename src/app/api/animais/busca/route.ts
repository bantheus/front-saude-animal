import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const animal = searchParams.get("animal");
  const especie = searchParams.get("especie");

  if (!animal && !especie) {
    return new NextResponse(
      JSON.stringify({
        message: "Parâmetros inválidos",
      }),
      {
        status: 400,
      },
    );
  }

  let whereClause = {};

  if (especie) {
    const especieData = await db.especie.findFirst({
      where: {
        nome: {
          contains: especie,
          mode: "insensitive",
        },
      },
    });

    if (!especieData) {
      return new NextResponse(
        JSON.stringify({
          message: "Espécie não encontrada",
        }),
        {
          status: 404,
        },
      );
    }

    whereClause = {
      especieId: especieData.id,
    };
  }

  if (animal) {
    if (Object.keys(whereClause).length > 0) {
      // Verifica se a propriedade especieId está presente
      whereClause = {
        AND: [
          whereClause,
          {
            nome: {
              contains: animal,
              mode: "insensitive",
            },
          },
        ],
      };
    } else {
      whereClause = {
        nome: {
          contains: animal,
          mode: "insensitive",
        },
      };
    }
  }

  const result = await db.animal.findMany({
    include: {
      especie: true, // Inclui os dados da espécie junto com os dados do animal
    },
    where: whereClause,
  });

  return new NextResponse(JSON.stringify(result), {
    status: 200,
  });
}
