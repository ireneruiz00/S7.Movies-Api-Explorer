import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getActorsDetails } from "../../api/getEndpoints";

function ActorDetailsPage() {
  const { id } = useParams();

  const { data: actor, isLoading, isError } = useQuery({
    queryKey: ["actor", id],
    queryFn: () => getActorsDetails(id!),
    enabled: !!id,
  });

  if (isLoading) {
    return (
    <div className="flex items-center justify-center mt-10">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400"></div>
      <p className="ml-3 text-yellow-400">Loading...</p>
    </div>
    )
  }
  
  if (isError || !actor) return <div className="text-red-400 p-10">Error loading actor</div>

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 text-yellow-50">
      <img
        src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
        alt={actor.name}
        className="rounded-xl w-full md:w-1/3 object-cover"
      />
      <div className="flex-1 space-y-4">
        <h1 className="text-4xl font-bold text-yellow-300">{actor.name}</h1>
        {actor.birthday && (
          <p className="text-lg">
            <span className="font-semibold text-yellow-200">Born:</span>{" "}
            {new Date(actor.birthday).toLocaleDateString()}
          </p>
        )}
        {actor.place_of_birth && (
          <p className="text-lg">
            <span className="font-semibold text-yellow-200">Place:</span> {actor.place_of_birth}
          </p>
        )}
        {actor.biography ? (
          <p className="mt-4 text-yellow-100">{actor.biography}</p>
        ) : (
          <p className="text-yellow-500">No biography available.</p>
        )}
      </div>
    </div>
  );
}

export default ActorDetailsPage