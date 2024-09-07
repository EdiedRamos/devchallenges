"use client";

import { SearchRecipe } from "./searchRecipe";
import { Sorting } from "./sorting";

export function Filtering() {
  return (
    <div className="flex flex-wrap justify-between">
      <SearchRecipe />
      <Sorting />
    </div>
  );
}
