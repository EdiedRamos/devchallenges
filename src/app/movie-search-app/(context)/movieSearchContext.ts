import { createContext } from "react";

export interface MoviePreview {
  title: string;
  poster: string;
  genre: string;
  plot: string;
  director: string;
  writer: string;
  actors: string;
  imdbRating: string;
  imdbVotes: string;
}

export interface MovieResponse {
  Title: string;
  Poster: string;
  Genre: string;
  Plot: string;
  Director: string;
  Writer: string;
  Actors: string;
  imdbRating: string;
  imdbVotes: string;
  Response: string;
}

export interface SearchResponse {
  content: MovieResponse;
}

export interface MovieSearchContext {
  query: string;
  movie: MoviePreview | undefined;
  handleQuery: (query: string) => void;
}

export const movieSearchContext = createContext<MovieSearchContext | undefined>(
  undefined
);
