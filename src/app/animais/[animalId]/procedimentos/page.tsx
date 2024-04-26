import CardDefault from "@/components/cards/default";
import CardProcedimento from "@/components/cards/procedimento";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/prisma";
import { PillIcon } from "lucide-react";
import Link from "next/link";

const getAllProcedimentosAnimal = async (animalId: string) => {
  const procedimentos = await db.procedimento.findMany({
    where: {
      animalId,
    },
    orderBy: {
      data: "desc",
    },
  });

  return procedimentos;
};

const AllProcedimentosAnimalPage = async ({
  params,
}: {
  params: { animalId: string };
}) => {
  const procedimentos = await getAllProcedimentosAnimal(params.animalId);

  return (
    <div className="container mx-auto h-svh p-5">
      <div className="flex items-center">
        <Separator />
        <h3 className="whitespace-nowrap px-5 text-sm font-medium text-neutral-600">
          Procedimentos
        </h3>
        <Separator />
      </div>

      {procedimentos.length === 0 ? (
        <CardDefault titulo="Nenhum procedimento encontrado" />
      ) : (
        <div className="flex flex-col items-center justify-center gap-6">
          <ul className="w-full">
            {procedimentos.map((procedimento) => (
              <CardProcedimento
                key={procedimento.id}
                titulo={procedimento.titulo}
                icon={<PillIcon />}
                data={procedimento.createdAt.toLocaleDateString()}
                procedimentoId={procedimento.id}
              />
            ))}
          </ul>

          <Link href={`/animais/${params.animalId}`} className="w-full">
            <Button className="w-full text-white transition-colors duration-300 first:bg-primary hover:bg-primary-foreground">
              Voltar
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AllProcedimentosAnimalPage;
