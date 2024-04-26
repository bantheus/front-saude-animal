import Link from "next/link";

interface CardProps {
  titulo: string;
  icon: React.ReactNode;
  data: string;
  consultaId: string;
}

const CardConsulta = ({ titulo, icon, data, consultaId }: CardProps) => {
  const dataFormatada = new Date(data).toLocaleDateString("pt-BR");
  return (
    <div className="mt-5 flex flex-col justify-end gap-4 rounded-md bg-orange-100 p-4 text-orange-900">
      <div className="flex items-center justify-center gap-2">
        {icon}
        <h4>{titulo}</h4>
      </div>
      <div className="flex items-center justify-between text-sm">
        <Link
          href={`/consultas/${consultaId}`}
          className="rounded-md bg-orange-300 px-4 py-2"
        >
          detalhes
        </Link>
        <p className="text-end">{dataFormatada}</p>
      </div>
    </div>
  );
};

export default CardConsulta;
