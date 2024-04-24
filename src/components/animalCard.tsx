import { Especie, Animal as PrismaAnimal } from "@prisma/client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface Animal extends PrismaAnimal {
  especie: Especie;
}

interface AnimalCardProps {
  animal: Animal;
}

const AnimalCard = ({ animal }: AnimalCardProps) => {
  return (
    <Card className="w-[280px] border-none shadow-md">
      <CardHeader className="p-0">
        <Image
          src={animal.foto}
          alt={animal.nome}
          width={280}
          height={280}
          className="h-[280px] w-full rounded-t-md object-cover object-center"
        />
      </CardHeader>
      <CardContent className=" p-4">
        <CardTitle className="mb-1 text-lg font-medium text-primary">
          {animal.nome}
        </CardTitle>
        <CardDescription>Espécie: {animal.especie.nome}</CardDescription>
        <CardDescription>Sexo: {animal.sexo.substring(0, 1)}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default AnimalCard;
