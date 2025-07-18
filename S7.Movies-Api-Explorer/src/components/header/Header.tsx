import { useAuth } from "../../context/AuthProvider"
import AuthButton from "../authentication/AuthButton"
import Navbar from "./Navbar"


function Header() {
  const {user} = useAuth()

  return (
    <header className="bg-[#5F939A] w-full h-35">
      <div className="h-full flex items-center justify-center px-10 md:justify-between">
        <Navbar/>
        <div className="flex items-center gap-4">
          {user ? <span className="text-yellow-200">{user.email}</span> : ''}
          <AuthButton/>
        </div>
      </div>
    </header>
  )
}

export default Header