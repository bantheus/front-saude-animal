import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

const getConsultaDetails = async (consultaId: string) => {
  const consulta = await db.consulta.findUnique({
    where: {
      id: consultaId,
    },
    include: {
      animal: {
        include: {
          especie: true,
        },
      },
    },
  });

  return consulta;
};

const ConsultaDetail = async ({
  params,
}: {
  params: { consultaId: string };
}) => {
  const consulta = await getConsultaDetails(params.consultaId);

  return (
    <div className="container mx-auto px-0">
      {!consulta ? (
        <div className="mt-20 flex flex-col items-center justify-center gap-y-2 ">
          <Image
            width={32}
            height={32}
            src="/icons/search-x.svg"
            alt="Nenhum consulta encontrado"
            className="object-contain object-center"
          />
          <p className="font-medium text-neutral-600">
            Consulta não encontrada
          </p>
        </div>
      ) : (
        <>
          <div className="relative h-[300px] w-full">
            <Image
              src={consulta.animal.foto}
              alt={consulta.animal.nome}
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          <div className="flex flex-col gap-2 p-5">
            <h1 className="text-xl font-semibold text-primary-foreground">
              {consulta.animal.nome}
            </h1>
            <div className="flex justify-between gap-2 text-xs">
              <p>Sexo - {consulta.animal.sexo.substring(0, 1)}</p>
              <p>Espécie - {consulta.animal.especie.nome}</p>
              <p>Peso - {consulta.animal.peso} Kg</p>
            </div>

            <Separator className="my-10" />
            <div className="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow-md">
              <div className="mb-6">
                <h2 className="text-center text-2xl font-bold">
                  {consulta.titulo}
                </h2>
                <p className="my-3 text-sm text-gray-600">
                  {consulta.descricao}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="mb-2 text-sm font-medium text-gray-500">
                    Data da consulta
                  </p>
                  <p>{consulta.data.toLocaleDateString("pt-BR")}</p>
                </div>
              </div>
            </div>
            <Link
              href={`/animais/${consulta.animalId}`}
              className="mt-5 w-full"
            >
              <Button className="w-full text-white transition-colors duration-300 first:bg-primary hover:bg-primary-foreground">
                Voltar
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default ConsultaDetail;
