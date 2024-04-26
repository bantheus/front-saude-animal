"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface AnimalSearchForm {
  animal: string;
  especie: string;
}

const AnimalSearch = () => {
  const { register, handleSubmit, watch } = useForm<AnimalSearchForm>();
  const router = useRouter();

  const onSubmit = (data: AnimalSearchForm) => {
    router.push(`/animais/busca?especie=${data.especie}&animal=${data.animal}`);
  };

  const especie = watch("especie");
  const animal = watch("animal");

  return (
    <div className="container relative mx-auto p-5">
      <Image
        src="/bg.svg"
        alt="Mapa"
        width={0}
        height={0}
        sizes="100vw"
        priority
        className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
      />
      <h1 className="text-center text-2xl font-semibold">
        Buscar <span className="text-primary">animais</span>
      </h1>

      <div className="mt-5 flex flex-col items-center">
        <Input placeholder="Busque por espécie" {...register("especie")} />
        <span className="my-1 font-semibold text-primary">OU</span>
        <Input placeholder="Busque por animal" {...register("animal")} />

        <Button
          onClick={() => handleSubmit(onSubmit)()}
          className="mt-4 w-full text-white transition-colors duration-300 hover:bg-primary-foreground"
          disabled={!especie && !animal}
        >
          Buscar
        </Button>
      </div>
    </div>
  );
};

export default AnimalSearch;
