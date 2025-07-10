import MovieCard from "./MovieCard";
import { usePopularMovies } from "../../hooks/usePopularMovies";

function MoviesGrid() {
    const { data, isLoading, error } = usePopularMovies(1);

    if (isLoading) return <p className="text-center text-yellow-400 mt-8">Loading movies...</p>;
    if (error) return <p className="text-center text-yellow-400 mt-8">An error occured while loading the movies.</p>;

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 p-4">
      {data?.results.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default MoviesGrid