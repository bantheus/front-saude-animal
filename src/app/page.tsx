import AnimalSearch from "@/components/animalSearch";
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
    </>
  );
}
