import { Preview, Search } from "./(components)";
import { MovieSearchProvider } from "./(context)/movieSearchProvider";

export default function MovieSearch() {
  return (
    <div className="min-h-screen bg-ms-black">
      <div className="h-[334px] overflow-hidden bg-ms-bg bg-cover bg-top flex justify-center items-center">
        <img
          src="/movie-search-app/OMDb-logo.svg"
          alt="omdb logo"
          className="mt-20"
        />
      </div>
      <div className="flex flex-col items-center pb-8">
        <MovieSearchProvider>
          <Search />
          <Preview />
        </MovieSearchProvider>
      </div>
    </div>
  );
}
