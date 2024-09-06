"use client";
import { useMovieSearch } from "../(context)/useMovieSearch";

function genres(genre: string): string[] {
  return genre.split(",");
}

export function Preview() {
  const { movie } = useMovieSearch();

  if (!movie) return <p>Movie not found</p>;

  return (
    <div className="flex flex-wrap border-2 border-ms-dark rounded-lg mt-5 p-6 gap-6 w-full max-w-[980px]">
      <div className="rounded-lg overflow-hidden w-full max-w-[240px]">
        <img
          src={movie.poster}
          alt={`${movie.title} poster`}
          className="w-full h-full"
        />
      </div>
      <div className="max-w-[630px]">
        <h2 className="text-cs-24 font-bold text-white">{movie.title}</h2>
        <div className="flex flex-wrap gap-2 mt-3">
          {genres(movie.genre).map((genre) => (
            <p
              key={genre}
              className="bg-ms-dark px-3 py-1 rounded-full text-cs-12 text-ms-gray"
            >
              {genre}
            </p>
          ))}
        </div>
        <p className="text-ms-gray mt-3">{movie.plot}</p>
        <div className="flex flex-col mt-6 gap-2 text-white">
          <p className="text-cs-12">
            <span className="text-ms-gray">Director:</span> {movie.director}
          </p>
          <p className="text-cs-12">
            <span className="text-ms-gray">Writers:</span> {movie.writer}
          </p>
          <p className="text-cs-12">
            <span className="text-ms-gray">Stars:</span> {movie.actors}
          </p>
          <p className="text-cs-12">
            <span className="text-ms-gray">IMDb Rating:</span>{" "}
            {movie.imdbRating}
            /10 <span className="text-ms-gray">({movie.imdbVotes} votes)</span>
          </p>
        </div>
      </div>
    </div>
  );
}
