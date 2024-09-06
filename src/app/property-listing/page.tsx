import { Content, Filter, Hero } from "./(components)";
import { FilterProvider } from "./(context)";

export default function PropertyListing() {
  return (
    <div className="min-h-screen bg-pl-black">
      <Hero />
      <FilterProvider>
        <div className="max-w-[1200px] mx-auto">
          <Filter />
          <Content />
        </div>
      </FilterProvider>
    </div>
  );
}
