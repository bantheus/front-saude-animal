import { Separator } from "../ui/separator";
import { quickSearchData } from "./data";
import QuickSearchIcon from "./quickSearchIcon";

const QuickSearch = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <Separator />
        <h2 className="whitespace-nowrap px-5 font-medium text-neutral-600">
          Filtros rápidos
        </h2>
        <Separator />
      </div>

      <div className="mt-6 flex w-full items-center justify-between">
        {quickSearchData.map((item) => (
          <QuickSearchIcon key={item.id} icon={item.icon} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default QuickSearch;
