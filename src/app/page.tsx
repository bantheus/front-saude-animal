import AnimalSearch from "@/components/animalSearch";
import LastAddAnimals from "@/components/lastAddAnimals";
import QuickSearch from "@/components/quick-search/quickSearch";

export default function Home() {
  return (
    <>
      <main>
        <AnimalSearch />
      </main>

      <section>
        <QuickSearch />
      </section>

      <section>
        <LastAddAnimals />
      </section>
    </>
  );
}
