import LoginButton from "./LoginButton"
import Navbar from "./Navbar"


function Header() {
  return (
    <header className="bg-blue-900/15 w-full h-35">
      <div className="h-full flex items-center justify-center px-10 md:justify-between">
        <Navbar/>
        <LoginButton/>
      </div>
    </header>
  )
}

export default Header