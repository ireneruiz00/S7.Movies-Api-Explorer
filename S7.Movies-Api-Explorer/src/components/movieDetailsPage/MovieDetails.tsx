import { useParams } from "react-router-dom";
import { useMovieDetails, useMovieCredits } from "../../hooks/usePopularMovies";
import { useEffect } from "react";

function MovieDetails() {
  const { id } = useParams(); // extreu l'id de la URL
  const { data: movie, isLoading } = useMovieDetails(id!);
  const { data: credits, isError, error } = useMovieCredits(id!);

  useEffect(() => {
  console.log("CREDITS:", credits);
    }, [credits]);

    if (isError) return <p>Error: {(error as Error).message}</p>;

  if (isLoading || !movie) return <p>Loading...</p>;

  return (
    <div className="flex flex-col md:flex-row p-6 gap-6">
      <img className="w-full md:w-1/3 rounded-xl" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      
      <div className="flex-1">
        <h1 className="text-3xl text-yellow-400">{movie.title} ({new Date(movie.release_date).getFullYear()})</h1>
        <p className="mt-4 text-yellow-200">{movie.overview}</p>
        {/* durada */}

        <div className="mt-6">
          <h2 className="text-xl text-yellow-300">Actors:</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-2">
            {credits?.cast.slice(0, 10).map(actor => (
                <div key={actor.id} className="flex flex-col items-center">
                {actor.profile_path ? (
                    <img
                    src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                    alt={actor.name}
                    className="w-24 h-36 object-cover rounded-md mb-1"
                    />
                ) : (
                    <div className="w-24 h-36 bg-blue-900/15 rounded-md mb-1 flex items-center justify-center text-sm text-gray-400">
                    No Image
                    </div>
                )}
                <p className="text-sm text-center text-yellow-100">{actor.name}</p>
                </div>
            ))}
            </div>

        

          <h2 className="text-xl mt-4 text-yellow-300">Director:</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-2">
            {credits?.crew
                .filter(member => member.job === "Director")
                .slice(0, 10).map(member => (
                <div key={member.id} className="flex flex-col items-center">
                {member.profile_path ? (
                    <img
                    src={`https://image.tmdb.org/t/p/w185${member.profile_path}`}
                    alt={member.name}
                    className="w-24 h-36 object-cover rounded-md mb-1"
                    />
                    ) : (
                    <div className="w-24 h-36 bg-blue-900/15 rounded-md mb-1 flex items-center justify-center text-sm text-gray-400">
                    No Image
                    </div>
                )}
                <p className="text-sm text-center text-yellow-100">{member.name}</p>
                </div>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;