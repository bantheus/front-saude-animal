import Image from "next/image";

interface QuickSearchIconProps {
  icon: string;
  title: string;
}

const QuickSearchIcon = ({ icon, title }: QuickSearchIconProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2">
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
