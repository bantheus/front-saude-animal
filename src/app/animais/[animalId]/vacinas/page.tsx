import CardDefault from "@/components/cards/default";
import CardVacina from "@/components/cards/vacina";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/prisma";
import { SyringeIcon } from "lucide-react";
import Link from "next/link";

const getAllVacinasAnimal = async (animalId: string) => {
  const vacinas = await db.vacina.findMany({
    where: {
      animalId,
    },
    orderBy: {
      data: "desc",
    },
  });

  return vacinas;
};

const AllVacinasAnimalPage = async ({
  params,
}: {
  params: { animalId: string };
}) => {
  const vacinas = await getAllVacinasAnimal(params.animalId);

  return (
    <div className="container mx-auto h-svh p-5">
      <div className="flex items-center">
        <Separator />
        <h3 className="whitespace-nowrap px-5 text-sm font-medium text-neutral-600">
          Vacinas
        </h3>
        <Separator />
      </div>

      {vacinas.length === 0 ? (
        <CardDefault titulo="Nenhuma vacina encontrado" />
      ) : (
        <div className="flex flex-col items-center justify-center gap-6">
          <ul className="w-full">
            {vacinas.map((vacina) => (
              <CardVacina
                key={vacina.id}
                titulo={vacina.nome}
                icon={<SyringeIcon />}
                data={vacina.createdAt.toLocaleDateString()}
                vacinaId={vacina.id}
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

export default AllVacinasAnimalPage;
