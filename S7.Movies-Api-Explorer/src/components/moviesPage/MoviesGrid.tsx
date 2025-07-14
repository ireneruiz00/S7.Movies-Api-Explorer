import MovieCard from "./MovieCard";
import { useMovies } from "../../context/MovieProvider";
import { useEffect, useRef } from "react";

function MoviesGrid() {
    const { movies, fetchNextPage, hasNextPage, isFetching  } = useMovies()
    const observerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        entries => {
            if (entries[0].isIntersecting && hasNextPage) {
            fetchNextPage();
            }
        },
        { threshold: 0.8 }
        );

        if (observerRef.current) observer.observe(observerRef.current);

        return () => {
        if (observerRef.current) observer.unobserve(observerRef.current);
        };
    }, [fetchNextPage, hasNextPage]);

  return (
    <>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 p-4">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {isFetching && (
                <div className="flex justify-center items-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400"></div>
                    <p className="ml-3 text-yellow-400">Loading more movies...</p>
                </div>
      )}

      <div ref={observerRef} className="h-10" aria-hidden="true"></div>
    </>
  )
}

export default MoviesGrid