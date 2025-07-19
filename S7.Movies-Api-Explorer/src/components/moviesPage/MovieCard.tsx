import { Link } from "react-router-dom"
import type { MovieProps } from "../../types/props"
import { motion } from "motion/react"

function MovieCard({movie}: MovieProps) {
  return (
    <motion.div 
    whileHover={{
        scale: 1.05,
        boxShadow: "0px 8px 24px rgba(0,0,0,0.4)",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      className="bg-[#34626C] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <Link to={`/movies/${movie.id}`}>
        <img 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          alt={movie.title}
          className="w-full h-auto object-cover"
        />
      </Link>
      <div className="p-4">
        <h3 className="text-lg text-yellow-400 font-bold mb-1 text-stroke">{movie.title}</h3>
        <p className="text-sm text-yellow-400">{new Date(movie.release_date).getFullYear()}</p>
      </div>
    </motion.div>
  )
}

export default MovieCard

