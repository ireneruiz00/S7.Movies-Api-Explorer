import type { CrewListProps } from "../../types/props";
import MiniCard from "./MiniCard";

function CrewList({ crew }: CrewListProps) {
  const directors = crew.filter(member => member.job === "Director");

  return (
    <section>
      <h2 className="text-xl text-yellow-300">Director:</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-2">
        {directors.slice(0, 10).map(member => (
          <MiniCard
            key={member.id}
            name={member.name}
            imageUrl={
              member.profile_path
                ? `https://image.tmdb.org/t/p/w185${member.profile_path}`
                : undefined
            }
          />
        ))}
      </div>
    </section>
  );
}

export default CrewList