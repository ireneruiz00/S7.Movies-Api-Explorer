import { motion } from "motion/react"
import { useNavigate } from "react-router-dom"
import search from "../../assets/search_106707.svg"

function DiscoverButton() {
    const navigate = useNavigate()

  const handleOnClick = () => {
    navigate('/movies')
  }

  return (
    <div className="flex items-center gap-2">
      <motion.button
        whileHover={{
          scale: 1.1,
          transition: {
            duration: 0.3,
            ease: "easeInOut",
          },
        }}
        onClick={handleOnClick}
        className="bg-[#4BBFE0] px-15 py-5 text-2xl text-[#00303F] font-bold rounded-4xl hover:bg-yellow-300 transition-colors duration-200"
      >
        DISCOVER MOVIES
      </motion.button>
      <img src={search} alt="search icon" className="h-20 w-20" />
    </div>
  )
}

export default DiscoverButton