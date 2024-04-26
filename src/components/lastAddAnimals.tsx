import { db } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import AnimalCard from "./animalCard";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const handleLastAddAnimals = async () => {
  const data = await db.animal.findMany({
    take: 3,
    orderBy: {
      createdAt: "desc",
    },
    include: {
      especie: true,
    },
  });

  return data;
};

const LastAddAnimals = async () => {
  const data = await handleLastAddAnimals();

  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <Separator />
        <h2 className="whitespace-nowrap px-5 text-sm font-medium text-neutral-600">
          Adicionados recentemente
        </h2>
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

        <Link href={`/animais`} className="w-[280px]">
          <Button className="w-full text-white transition-colors duration-300 first:bg-primary hover:bg-primary-foreground">
            Ver todos
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LastAddAnimals;
