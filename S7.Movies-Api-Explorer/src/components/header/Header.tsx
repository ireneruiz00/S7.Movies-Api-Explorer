import { useAuth } from "../../context/AuthProvider"
import LoginButton from "./LoginButton"
import { LogOutButton } from "./LogOutButton"
import Navbar from "./Navbar"


function Header() {
  const {user} = useAuth()

  return (
    <header className="bg-blue-900/15 w-full h-35">
      <div className="h-full flex items-center justify-center px-10 md:justify-between">
        <Navbar/>
        <div className="flex items-center gap-4">
          {user ? (
            <>
            <span className="text-yellow-200">{user.email}</span>
            <LogOutButton />
            </>
            )  : (
              <LoginButton/>
            )}
        </div>
      </div>
    </header>
  )
}

export default Header