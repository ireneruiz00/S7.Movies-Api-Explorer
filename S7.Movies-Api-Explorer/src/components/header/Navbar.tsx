import { NavLink } from "react-router-dom"

interface Navbar {
  isActive: boolean;
}


function Navbar<Navbar>() {
  return (
    <nav className="flex space-x-10 text-xl text-yellow-400 font-semibold">
      
      <NavLink to="/" className={({ isActive }) =>
          `bg-[#02475E] py-2 px-6 rounded-xs border-b-2 ${isActive ? "border-yellow-200" : "border-transparent"}`
        }>Home</NavLink>

      <NavLink to="/movies" className={({ isActive }) =>
          `bg-[#02475E] py-2 px-6 rounded-xs border-b-2 ${isActive ? "border-yellow-200" : "border-transparent"}`
        }>Movies</NavLink>
    </nav>  )
}

export default Navbar