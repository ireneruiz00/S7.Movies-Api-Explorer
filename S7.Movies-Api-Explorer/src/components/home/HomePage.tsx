import { useNavigate } from "react-router-dom"
import LoginForm from "../authentication/LoginForm"
import search from "../../assets/search_106707.svg"

function HomePage() {
  const navigate = useNavigate()

  const handleOnClick = () => {
    navigate('/movies')
  }

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="my-30 mx-10 flex flex-col items-center bg-blue-100 p-25">
        <button onClick={handleOnClick} className="bg-yellow-400 px-30 py-10 text-3xl font-bold rounded-3xl hover:bg-yellow-200">
          DISCOVER MOVIES
        </button>
        <img src={search} alt="search icon" className="h-30 w-30"/>
      </div>
      <div className="px-55 flex items-center">
        <LoginForm/>
      </div>
    </div>
    
  )
}

export default HomePage