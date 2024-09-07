"use client";

import { useRecipe } from "../(context)";
import { SortBy } from "../(models)";

export function Sorting() {
  const { sortBy, handleSortBy } = useRecipe();
  return (
    <div className="flex flex-col justify-center">
      <select
        onChange={(event) => handleSortBy(event.target.value as SortBy)}
        value={sortBy}
        className="bg-rp-light text-rp-dark py-[14px] px-6 rounded-full text-cs-14 outline-none"
      >
        <option value="name">Sort by: Name</option>
        <option value="id">Sort by:ID</option>
      </select>
    </div>
  );
}
