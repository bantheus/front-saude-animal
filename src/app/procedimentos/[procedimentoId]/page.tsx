import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/prisma";
import Image from "next/image";

const getProcedimentoDetails = async (procedimentoId: string) => {
  const procedimento = await db.procedimento.findUnique({
    where: {
      id: procedimentoId,
    },
    include: {
      animal: {
        include: {
          especie: true,
        },
      },
    },
  });

  return procedimento;
};

const ProcedimentoDetail = async ({
  params,
}: {
  params: { procedimentoId: string };
}) => {
  const procedimento = await getProcedimentoDetails(params.procedimentoId);

  console.log(procedimento);

  return (
    <div className="container mx-auto px-0">
      {!procedimento ? (
        <div className="mt-20 flex flex-col items-center justify-center gap-y-2 ">
          <Image
            width={32}
            height={32}
            src="/icons/search-x.svg"
            alt="Nenhum procedimento encontrado"
            className="object-contain object-center"
          />
          <p className="font-medium text-neutral-600">
            Procedimento não encontrado
          </p>
        </div>
      ) : (
        <>
          <div className="relative h-[300px] w-full">
            <Image
              src={procedimento.animal.foto}
              alt={procedimento.animal.nome}
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          <div className="flex flex-col gap-2 p-5">
            <h1 className="text-xl font-semibold text-primary-foreground">
              {procedimento.animal.nome}
            </h1>
            <div className="flex justify-between gap-2 text-xs">
              <p>Sexo - {procedimento.animal.sexo.substring(0, 1)}</p>
              <p>Espécie - {procedimento.animal.especie.nome}</p>
              <p>Peso - {procedimento.animal.peso} Kg</p>
            </div>

            <Separator className="my-10" />
            <div className="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow-md">
              <div className="mb-6">
                <h2 className="text-center text-2xl font-bold">
                  {procedimento.titulo}
                </h2>
                <p className="my-3 text-sm text-gray-600">
                  {procedimento.descricao}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="mb-2 text-sm font-medium text-gray-500">
                    Data do procedimento
                  </p>
                  <p>{procedimento.data.toLocaleDateString("pt-BR")}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProcedimentoDetail;
