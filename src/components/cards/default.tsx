interface CardProps {
  titulo: string;
}

const CardDefault = ({ titulo }: CardProps) => {
  return (
    <div className="mt-5 flex flex-col justify-end gap-4 rounded-md bg-slate-100 p-4 text-slate-900">
      <div className="flex items-center justify-center gap-2">
        <div className="h-6 w-6 rounded-full bg-slate-300 "></div>
        <h4 className="text-xs">{titulo}</h4>
      </div>
      <div className="flex items-center justify-between text-sm">
        <div className="h-8 w-20 rounded-md bg-slate-300 px-4 py-2"></div>
        <div className="h-4 w-20 rounded-md bg-slate-300 text-end"></div>
      </div>
    </div>
  );
};

export default CardDefault;
