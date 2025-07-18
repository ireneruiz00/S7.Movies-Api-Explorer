import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function AuthButton() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setTimeout(() => navigate("/"), 1);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return user ? (
    <button
      onClick={handleLogout}
      className="bg-red-400 text-[#00303F] font-bold py-2 px-6 rounded hover:bg-red-200"
    >
      Logout
    </button>
  ) : (
    <button
      onClick={handleLoginRedirect}
      className="bg-yellow-400 text-[#00303F] font-bold py-2 px-6 rounded hover:bg-yellow-200"
    >
      LOGIN
    </button>
  );
}