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
      className="bg-[#00303F] text-[#4BBFE0] border border-[#4BBFE0] font-semibold py-2 px-6 rounded hover:bg-[#00303F]/55 text-xl"
    >
      Logout
    </button>
  ) : (
    <button
      onClick={handleLoginRedirect}
      className="bg-yellow-400 text-[#00303F] text-xl font-bold py-2 px-6 rounded hover:bg-[#4BBFE0]"
    >
      LOGIN
    </button>
  );
}