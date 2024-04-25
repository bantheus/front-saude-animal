import CardDefault from "@/components/cards/default";
import CardProcedimento from "@/components/cards/procedimento";
import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/prisma";
import { PillIcon, StethoscopeIcon, SyringeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const getAnimalDetails = async (animalId: string) => {
  const animal = await db.animal.findUnique({
    where: {
      id: animalId,
    },
    include: {
      especie: true,
      consulta: {
        orderBy: {
          createdAt: "desc",
        },
      },
      procedimento: {
        orderBy: {
          createdAt: "desc",
        },
      },
      vacina: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  if (animal) {
    animal.vacina = animal.vacina.slice(0, 3);
    animal.procedimento = animal.procedimento.slice(0, 3);
    animal.consulta = animal.consulta.slice(0, 3);
  }

  return animal;
};

const AnimalDetails = async ({ params }: { params: { animalId: string } }) => {
  const animal = await getAnimalDetails(params.animalId);

  return (
    <div className="container mx-auto px-0">
      {!animal ? (
        <div className="mt-20 flex flex-col items-center justify-center gap-y-2 ">
          <Image
            width={32}
            height={32}
            src="/icons/search-x.svg"
            alt="Nenhum animal encontrado"
            className="object-contain object-center"
          />
          <p className="font-medium text-neutral-600">Animal não encontrado</p>
        </div>
      ) : (
        <>
          <div className="relative h-[300px] w-full">
            <Image
              src={animal.foto}
              alt={animal.nome}
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          <div className="flex flex-col gap-2 p-5">
            <h1 className="text-xl font-semibold text-primary-foreground">
              {animal.nome}
            </h1>
            <div className="flex justify-between gap-2 text-sm">
              <p>Espécie - {animal.especie.nome}</p>
              <p>Sexo - {animal.sexo.substring(0, 1)}</p>
              <p>Peso - {animal.peso} Kg</p>
            </div>

            <Separator className="my-10" />

            <div className="flex flex-col gap-4">
              <Link
                href={`/procedimentos/${animal.id}`}
                className="flex w-full items-center justify-center gap-3 rounded-md bg-violet-200 py-4 text-violet-900 shadow-md transition-colors duration-300 ease-in-out hover:bg-violet-300"
              >
                <PillIcon />
                <h2 className="font-semibold">Procedimentos</h2>
              </Link>

              <Link
                href={`/vacinas/${animal.id}`}
                className="flex w-full items-center justify-center gap-3 rounded-md bg-rose-200 py-4 text-rose-900 shadow-md transition-colors duration-300 ease-in-out hover:bg-rose-300"
              >
                <SyringeIcon />
                <h2 className="font-semibold">Vacinas</h2>
              </Link>

              <Link
                href={`/consultas/${animal.id}`}
                className="flex w-full items-center justify-center gap-3 rounded-md bg-orange-200 py-4 text-orange-900 shadow-md transition-colors duration-300 ease-in-out hover:bg-orange-300"
              >
                <StethoscopeIcon />
                <h2 className="font-semibold">Consultas</h2>
              </Link>
            </div>

            <Separator className="my-10" />

            <div>
              <div className="flex items-center">
                <Separator />
                <h3 className="whitespace-nowrap px-5 text-sm font-medium text-neutral-600">
                  Últimos procedimentos
                </h3>
                <Separator />
              </div>

              {animal.procedimento.length === 0 ? (
                <CardDefault titulo="Nenhum procedimento encontrado" />
              ) : (
                <ul>
                  {animal.procedimento.map((procedimento) => (
                    <CardProcedimento
                      key={procedimento.id}
                      titulo={procedimento.titulo}
                      icon={<PillIcon />}
                      data={procedimento.createdAt.toLocaleDateString()}
                      href={procedimento.id}
                    />
                  ))}
                </ul>
              )}
            </div>

            <div className="mt-4">
              <div className="flex items-center">
                <Separator />
                <h3 className="whitespace-nowrap px-5 text-sm font-medium text-neutral-600">
                  Últimas vacinas
                </h3>
                <Separator />
              </div>

              {animal.procedimento.length === 0 ? (
                <CardDefault titulo="Nenhuma vacina encontrado" />
              ) : (
                <ul>
                  {animal.vacina.map((vacina) => (
                    <CardProcedimento
                      key={vacina.id}
                      titulo={vacina.nome}
                      icon={<SyringeIcon />}
                      data={vacina.createdAt.toLocaleDateString()}
                      href={vacina.id}
                    />
                  ))}
                </ul>
              )}
            </div>

            <div className="mt-4">
              <div className="flex items-center">
                <Separator />
                <h3 className="whitespace-nowrap px-5 text-sm font-medium text-neutral-600">
                  Últimas consultas
                </h3>
                <Separator />
              </div>

              {animal.procedimento.length === 0 ? (
                <CardDefault titulo="Nenhuma consulta encontrado" />
              ) : (
                <ul>
                  {animal.consulta.map((consulta) => (
                    <CardProcedimento
                      key={consulta.id}
                      titulo={consulta.titulo}
                      icon={<StethoscopeIcon />}
                      data={consulta.createdAt.toLocaleDateString()}
                      href={consulta.id}
                    />
                  ))}
                </ul>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AnimalDetails;
