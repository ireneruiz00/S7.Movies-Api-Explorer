import tmbdLogo from "../../assets/tmbdLogo.png"
import AuthButton from "../authentication/AuthButton"
import DiscoverButton from "./DiscoverButton"

function HomePage() {

  return (
    <div className="flex flex-col items-center">
      <div className=" flex flex-col items-center p-3">
        <img src={tmbdLogo} alt="tmbd logo" className="h-100 w-100"/>
      </div>

      <div className="px-5 flex flex-col items-center">
        <div className="flex">
        <DiscoverButton/>       
        </div>
        <div className="mt-10">
          <AuthButton/>
        </div>
      </div>
    </div>
  )
}

export default HomePage