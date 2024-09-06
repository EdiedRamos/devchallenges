import { useContext } from "react";
import { movieSearchContext } from "./movieSearchContext";

export function useMovieSearch() {
  const context = useContext(movieSearchContext);
  if (!context)
    throw new Error("useMovieSearch must to be inside movie search context");
  return context;
}
