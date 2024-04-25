import { StethoscopeIcon } from "lucide-react";
import { Button } from "../ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const ConsultaForm = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex h-[56px] w-full items-center justify-center gap-3 rounded-md bg-orange-200 py-4 text-orange-900 shadow-md transition-colors duration-300 ease-in-out hover:bg-orange-300">
          <StethoscopeIcon />
          <h2 className="font-semibold">Consultas</h2>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicionar consulta</DialogTitle>
          <DialogDescription>
            Adicione uma nova consulta aqui. Clique em salvar quando estiver
            pronto.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Input placeholder="Título" />

          <Textarea placeholder="Descrição" />
        </div>
        <DialogFooter>
          <Button type="submit" className="text-white">
            Salvar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultaForm;
