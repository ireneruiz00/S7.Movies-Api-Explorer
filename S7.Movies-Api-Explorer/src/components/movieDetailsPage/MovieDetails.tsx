import { useParams } from "react-router-dom";
import { useMovieDetails, useMovieCredits } from "../../hooks/useMovieDetails";
import Loading from "../shared/Loading";
import DetailsLayout from "../layouts/DetailsLayout";
import CastList from "./CastList";
import CrewList from "./CrewList";

function MovieDetails() {
  const { id } = useParams(); // extreu l'id de la URL
  const { data: movie, isLoading } = useMovieDetails(id!)
  const { data: credits, isError, error } = useMovieCredits(id!)

  if (isError) return <p>Error: {(error as Error).message}</p>;

  if (isLoading || !movie) return <Loading/>
  
  return (
    <DetailsLayout imageSrc={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}>
      <h1 className="text-3xl text-yellow-400">{movie.title} ({new Date(movie.release_date).getFullYear()})</h1>
      <p className="text-yellow-200">{movie.overview}</p>
      <CastList cast={credits?.cast || []} />
      <CrewList crew={credits?.crew || []} />
    </DetailsLayout>
  );
}

export default MovieDetails;