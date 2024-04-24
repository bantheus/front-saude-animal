import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const AnimalSearch = () => {
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

      <div className="mt-5 flex flex-col items-center space-y-2">
        <Input placeholder="Busque por espécie" />
        <span className="font-semibold text-primary">OU</span>
        <Input placeholder="Busque por animal" />

        <Button className="w-full text-white transition-colors duration-300 hover:bg-primary-foreground">
          Buscar
        </Button>
      </div>
    </div>
  );
};

export default AnimalSearch;
