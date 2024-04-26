import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const req = await request.json();

  const { animalId, titulo, data, descricao } = req;

  const slug = animalId.split("-")[0];
  const hora = new Date();

  const animal = await db.animal.findUnique({
    where: {
      id: animalId,
    },
  });

  if (!animal) {
    return new NextResponse(
      JSON.stringify({
        error: {
          code: "ANIMAL_NOT_FOUND",
        },
      }),
    );
  }

  await db.consulta.create({
    data: {
      titulo,
      data: new Date(data),
      descricao,
      animalId,
      slug,
      hora: hora.toISOString(),
    },
  });

  return new NextResponse(
    JSON.stringify({
      success: true,
    }),
    { status: 201 },
  );
}
