"use client";

import { useMovieSearch } from "../(context)/useMovieSearch";

export function Search() {
  const { handleQuery } = useMovieSearch();
  return (
    <div className="relative -top-8 px-7 py-5 bg-ms-dark rounded-lg text-ms-gray flex gap-4 w-full max-w-[600px]">
      <img src="/movie-search-app/Search_alt.svg" alt="" />
      <input
        type="search"
        placeholder="Search movie"
        onChange={(event) => handleQuery(event.target.value)}
        className="w-full bg-inherit outline-none"
      />
    </div>
  );
}
