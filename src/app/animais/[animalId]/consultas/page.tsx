import CardConsulta from "@/components/cards/consulta";
import CardDefault from "@/components/cards/default";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/prisma";
import { StethoscopeIcon } from "lucide-react";
import Link from "next/link";

const getAllConsultasAnimal = async (animalId: string) => {
  const consultas = await db.consulta.findMany({
    where: {
      animalId,
    },
    orderBy: {
      data: "desc",
    },
  });

  return consultas;
};

const AllConsultasAnimal = async ({
  params,
}: {
  params: { animalId: string };
}) => {
  const consultas = await getAllConsultasAnimal(params.animalId);

  return (
    <div className="container mx-auto h-svh p-5">
      <div className="flex items-center">
        <Separator />
        <h3 className="whitespace-nowrap px-5 text-sm font-medium text-neutral-600">
          Consultas
        </h3>
        <Separator />
      </div>

      {consultas.length === 0 ? (
        <CardDefault titulo="Nenhuma consulta encontrada" />
      ) : (
        <div className="flex flex-col items-center justify-center gap-6">
          <ul className="w-full">
            {consultas.map((consulta) => (
              <CardConsulta
                key={consulta.id}
                titulo={consulta.titulo}
                icon={<StethoscopeIcon />}
                data={consulta.createdAt.toLocaleDateString()}
                consultaId={consulta.id}
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

export default AllConsultasAnimal;
