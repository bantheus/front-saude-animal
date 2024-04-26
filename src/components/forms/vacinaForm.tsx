"use client";

import { SyringeIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import DatePicker from "../ui/date-picker";
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

interface AnimalProps {
  animalId: string;
}

interface VacinaFormProps {
  titulo: string;
  descricao: string;
  data: Date;
}

const VacinaForm = ({ animalId }: AnimalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    reset,
  } = useForm<VacinaFormProps>();

  const onSubmit = async (data: VacinaFormProps) => {
    await fetch("http://localhost:3000/api/vacinas", {
      method: "POST",
      body: Buffer.from(
        JSON.stringify({
          nome: data.titulo,
          descricao: data.descricao,
          data: data.data,
          animalId,
        }),
      ),
    });

    setValue("titulo", "");
    setValue("descricao", "");
    reset();

    setIsOpen(false);

    await router.push(`/animais/${animalId}`);
    router.refresh();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
          <Input
            {...register("titulo", {
              required: {
                value: true,
                message: "O título é obrigatório",
              },
            })}
            placeholder="Título"
            className={`${errors.titulo ? "focus-visible:ring-red-500" : "focus-visible:ring-primary"} `}
          />

          <span
            className={`${
              errors.titulo ? "opacity-100" : "opacity-0"
            } -mt-2 h-[4px] text-xs text-red-500 duration-200 ease-out`}
          >
            {errors.titulo?.message}
          </span>

          <Controller
            name="data"
            control={control}
            rules={{
              required: {
                value: true,
                message: "A data é obrigatória",
              },
            }}
            render={({ field }) => (
              <DatePicker
                placeholderText="Data"
                selected={field.value}
                {...field}
                value={field.value ? field.value.toLocaleDateString() : ""}
                className={`${errors.data ? "focus-visible:ring-red-500" : "focus-visible:ring-primary"} `}
              />
            )}
          />

          <span
            className={`${
              errors.data ? "opacity-100" : "opacity-0"
            } -mt-2 h-[4px] text-xs text-red-500 duration-200 ease-out`}
          >
            {errors.data?.message}
          </span>

          <Textarea
            placeholder="Descrição"
            {...register("descricao", {
              required: {
                value: true,
                message: "A descrição é obrigatória",
              },
            })}
            className={`${errors.descricao ? "focus-visible:ring-red-500" : "focus-visible:ring-primary"} `}
          />

          <span
            className={`${
              errors.descricao ? "opacity-100" : "opacity-0"
            } -mt-2 h-[4px] text-xs text-red-500 duration-200 ease-out`}
          >
            {errors.descricao?.message}
          </span>
        </div>
        <DialogFooter>
          <Button
            onClick={() => handleSubmit(onSubmit)()}
            type="submit"
            className="text-white"
          >
            Salvar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default VacinaForm;
