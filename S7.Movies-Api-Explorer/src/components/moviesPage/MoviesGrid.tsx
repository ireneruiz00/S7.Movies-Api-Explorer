import MovieCard from "./MovieCard";
import { useMovies } from "../../context/MovieProvider";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import Loading from "../shared/Loading";

function MoviesGrid() {
    const { movies, fetchNextPage, hasNextPage, isFetching  } = useMovies()
    const observerRef = useInfiniteScroll(fetchNextPage, hasNextPage);

  return (
    <>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 p-4">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      
      {isFetching && <Loading text="Loading more movies..."/>}

      <div ref={observerRef} className="h-10" aria-hidden="true"></div>
    </>
  )
}

export default MoviesGrid