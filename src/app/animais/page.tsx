import AnimalCard from "@/components/animalCard";
import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/prisma";
import Image from "next/image";

const handleAnimals = async () => {
  const data = await db.animal.findMany({
    include: {
      especie: true,
    },
  });

  return data;
};

const AnimalsPage = async () => {
  const data = await handleAnimals();

  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <Separator />
        <h1 className="whitespace-nowrap px-5 text-sm font-medium text-neutral-600">
          Todos os animais
        </h1>
        <Separator />
      </div>

      {data.length === 0 && (
        <div className="mt-20 flex flex-col items-center justify-center gap-y-2 ">
          <Image
            width={32}
            height={32}
            src="/icons/search-x.svg"
            alt="Nenhum animal encontrado"
            className="object-contain"
          />
          <p className="font-medium text-neutral-600">
            Nenhum animal encontrado
          </p>
        </div>
      )}
      <div className="mt-5 flex w-full flex-col items-center gap-6">
        {data.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AnimalsPage;
