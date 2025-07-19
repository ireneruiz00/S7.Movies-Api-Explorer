import { useAuth } from "../../context/AuthProvider"
import AuthButton from "../authentication/AuthButton"
import Navbar from "./Navbar"


function Header() {
  const {user} = useAuth()

  return (
    <header className="bg-[#5F939A] w-full h-35">
      <div className="h-full flex flex-col items-center justify-center px-10 gap-3 md:justify-between md:flex-row">
        <Navbar/>
        <div className="flex items-center justify-center gap-4">
          {user ? <span className="text-[#00303F]">{user.email}</span> : ''}
          <AuthButton/>
        </div>
      </div>
    </header>
  )
}

export default Header