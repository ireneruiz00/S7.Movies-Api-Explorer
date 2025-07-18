import { useNavigate } from "react-router-dom"
import search from "../../assets/search_106707.svg"
import tmbdLogo from "../../assets/tmbdLogo.png"
import AuthButton from "../authentication/AuthButton"

function HomePage() {
  const navigate = useNavigate()

  const handleOnClick = () => {
    navigate('/movies')
  }

  return (
    <div className="flex flex-col items-center sm:flex-row">
      <div className="mx-10 flex flex-col items-center p-25">
        <img src={tmbdLogo} alt="tmbd logo" className="h-100 w-100"/>
        <div className="flex">
        <button onClick={handleOnClick} className="bg-yellow-400 ml-13 px-15 text-2xl text-[#00303F] font-bold rounded-3xl hover:bg-yellow-200">
          DISCOVER MOVIES
        </button>
        <img src={search} alt="search icon" className="h-30 w-30"/>
        </div>
      </div>
      <div className="px-35 flex items-center">
        <AuthButton/>
      </div>
    </div>
  )
}

export default HomePage