"use client";

import { useRecipe } from "../(context)";

export function SearchRecipe() {
  const { searchBy, handleSearchBy } = useRecipe();
  return (
    <div className="px-6 py-2 bg-rp-dark border-[2px] border-rp-gray rounded-full text-rp-light flex gap-4 w-full max-w-[500px] text-cs-14">
      <img src="/recipe-page/Search.svg" alt="" />
      <input
        value={searchBy}
        onChange={(event) => handleSearchBy(event.target.value)}
        type="search"
        placeholder="Search recipes and more..."
        className="w-full bg-inherit outline-none placeholder:text-rp-gray"
      />
    </div>
  );
}
