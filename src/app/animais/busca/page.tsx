"use client";

import AnimalCard from "@/components/animalCard";
import { Separator } from "@/components/ui/separator";
import { Especie, Animal as PrismaAnimal } from "@prisma/client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

interface Animal extends PrismaAnimal {
  especie: Especie;
}

function Search() {
  const [animais, setAnimais] = useState<Animal[]>([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchAnimals = async () => {
      const response = await fetch(
        `/api/animais/busca?animal=${searchParams.get("animal") ?? ""}&especie=${searchParams.get("especie") ?? ""}`,
      );

      const data = await response.json();

      setAnimais(Array.isArray(data) ? data : []);
    };

    fetchAnimals();
  }, [searchParams]);

  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <Separator />
        <h2 className="whitespace-nowrap px-5 text-sm font-medium text-neutral-600">
          Resultados da busca
        </h2>
        <Separator />
      </div>

      {animais.length === 0 && (
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
        {animais.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
}

const BuscaPage = () => {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Search />
    </Suspense>
  );
};

export default BuscaPage;
