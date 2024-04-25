import Link from "next/link";

interface CardProps {
  titulo: string;
  icon: React.ReactNode;
  data: string;
  href: string;
}

const CardProcedimento = ({ titulo, icon, data, href }: CardProps) => {
  return (
    <div className="mt-5 flex flex-col justify-end gap-4 rounded-md bg-violet-100 p-4 text-violet-900">
      <div className="flex items-center justify-center gap-2">
        {icon}
        <h4>{titulo}</h4>
      </div>
      <div className="flex items-center justify-between text-sm">
        <Link
          href={`/procedimentos/${href}`}
          className="rounded-md bg-violet-300 px-4 py-2"
        >
          ver mais
        </Link>
        <p className="text-end">{data}</p>
      </div>
    </div>
  );
};

export default CardProcedimento;
