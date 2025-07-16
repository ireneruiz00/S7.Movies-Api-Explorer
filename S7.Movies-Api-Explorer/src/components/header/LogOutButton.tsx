import { signOut } from "firebase/auth";
import { auth } from "../../firebase"; 
import { useNavigate } from "react-router-dom";

export function LogOutButton() {
  const navigate = useNavigate()

   const handleLogout = async () => {
    try {
      await signOut(auth)       // espera que Firebase tanqui sessió
      setTimeout(() => navigate("/"), 1)             
    } catch (error) {
      console.error("Error signing out:", error)
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-yellow-200 p-2 rounded"
    >
      Logout
    </button>
  )
}