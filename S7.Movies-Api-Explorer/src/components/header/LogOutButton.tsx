import { signOut } from "firebase/auth";
import { auth } from "../../firebase"; 

export function LogOutButton() {
  return (
    <button
      onClick={() => signOut(auth)}
      className="bg-yellow-200 p-2 rounded"
    >
      Logout
    </button>
  );
}