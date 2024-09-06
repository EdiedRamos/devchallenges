import { LocationFilter } from "./locationFilter";
import { TypeFilter } from "./typeFilter";

export function Filter() {
  return (
    <section className="relative -top-16 bg-pl-dark-100 py-8 px-10 rounded-lg flex flex-wrap justify-between border-2 border-pl-gray-200">
      <LocationFilter />
      <TypeFilter />
    </section>
  );
}
