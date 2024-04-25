import { SyringeIcon } from "lucide-react";
import { Button } from "../ui/button";
import { DatePicker } from "../ui/date-picker";
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

const VacinaForm = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex h-[56px] w-full items-center justify-center gap-3 rounded-md bg-rose-200 py-4 text-rose-900 shadow-md transition-colors duration-300 ease-in-out hover:bg-rose-300">
          <SyringeIcon />
          <h2 className="font-semibold">Vacinas</h2>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicionar vacina</DialogTitle>
          <DialogDescription>
            Adicione uma nova vacina aqui. Clique em salvar quando estiver
            pronto.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Input placeholder="Título" />

          <DatePicker />

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

export default VacinaForm;
