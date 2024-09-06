"use client";

import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import {
  MoviePreview,
  MovieResponse,
  MovieSearchContext,
  movieSearchContext,
  SearchResponse,
} from "./movieSearchContext";

function movieMapper(movieResponse: MovieResponse): MoviePreview {
  const moviePreview: MoviePreview = {
    actors: movieResponse.Actors,
    director: movieResponse.Director,
    genre: movieResponse.Genre,
    imdbRating: movieResponse.imdbRating,
    imdbVotes: movieResponse.imdbVotes,
    plot: movieResponse.Plot,
    poster: movieResponse.Poster,
    title: movieResponse.Title,
    writer: movieResponse.Writer,
  };
  return moviePreview;
}

async function fetchMovie(query: string) {
  return fetch(`movie-search-app/api/search/${query}`)
    .then((response) => response.json())
    .then((data: SearchResponse) =>
      data.content.Response === "False" ? null : movieMapper(data.content)
    )
    .catch(() => {
      return null;
    });
}

export function MovieSearchProvider({ children }: PropsWithChildren) {
  const [query, setQuery] = useState<string>("");
  const [movie, setMovie] = useState<MoviePreview>();

  const handleQuery = useCallback((query: string) => setQuery(query), []);

  useEffect(() => {
    fetchMovie("Avatar: The way of Water").then((response) =>
      setMovie(response ?? undefined)
    );
  }, []);

  useEffect(() => {
    if (query.length === 0) return;

    const timeId = setTimeout(() => {
      fetchMovie(query).then((response) => setMovie(response ?? undefined));
    }, 500);

    return () => clearTimeout(timeId);
  }, [query]);

  const values: MovieSearchContext = {
    query,
    movie,
    handleQuery,
  };

  return (
    <movieSearchContext.Provider value={values}>
      {children}
    </movieSearchContext.Provider>
  );
}
