import { db } from "@/lib/prisma";
import Image from "next/image";
import { Separator } from "./ui/separator";

const LastAddAnimals = async () => {
  const data = await db.animal.findMany({
    take: 3,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="container mx-auto px-5">
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

      {data.map((animal) => (
        <p key={animal.id}>{animal.nome}</p>
      ))}
    </div>
  );
};

export default LastAddAnimals;
