import type { Movie } from "../../types/moviesTypes"

interface Props {
    movie: Movie
}

function MovieCard({movie}:Props) {
  return (
    <div className="bg-blue-900/25 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <img 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
        alt={movie.title}
        className="w-full h-auto object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg text-yellow-400 font-semibold mb-1">{movie.title}</h3>
        <p className="text-sm text-yellow-200">{new Date(movie.release_date).getFullYear()}</p>
      </div>
    </div>
  )
}

export default MovieCard