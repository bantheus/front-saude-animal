"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface QuickSearchIconProps {
  icon: string;
  title: string;
}

interface AnimalSearchForm {
  title: string;
}

const QuickSearchIcon = ({ icon, title }: QuickSearchIconProps) => {
  const router = useRouter();

  const { handleSubmit } = useForm<AnimalSearchForm>();

  const onSubmit = () => {
    router.push(`/animais/busca?especie=${title}`);
  };

  return (
    <div
      onClick={() => handleSubmit(onSubmit)()}
      className="flex flex-col items-center justify-center gap-y-2"
    >
      <Image
        width={32}
        height={32}
        src={`/icons/${icon}`}
        alt={`Icone ${title}`}
        className="object-contain"
      />
      <p className="text-xs font-medium text-neutral-600">{title}</p>
    </div>
  );
};

export default QuickSearchIcon;
