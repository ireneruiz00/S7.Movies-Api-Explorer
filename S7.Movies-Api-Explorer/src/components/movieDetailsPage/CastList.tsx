import MiniCard from "./MiniCard";
import type { CastListProps } from "../../types/props";
import { useNavigate } from "react-router-dom";


function CastList({ cast }: CastListProps) {
    const navigate = useNavigate()
  return (
    <section>
        <h2 className="text-xl text-yellow-300">Actors:</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-2">
            {cast.slice(0, 10).map(actor => (
                <MiniCard
                    key={actor.id}
                    name={actor.name}
                    imageUrl={
                        actor.profile_path
                            ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                            : undefined
                    }
                    onClick={() => navigate(`/actor/${actor.id}`)}
                />
            ))}
            </div>
    </section>
  )
}

export default CastList

