import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth } from "../../firebase"
import { Link, useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"

function RegisterPage() {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const location = useLocation()
  const from = (location.state as any)?.from?.pathname || "/movies"

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate(from, { replace: true })
    } catch (err: any) {
      setError(err.message);
    }
  }
    
  return (
    <div className="flex flex-col gap-4 shadow bg-yellow-400 p-6 rounded-xl max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold">Create Account</h2>
      {error && <p className="text-red-700">{error}</p>}
      <input
        placeholder="Email"
        className="p-2 rounded border"
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />
      <input
        placeholder="Password"
        className="p-2 rounded border"
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <button onClick={signUp} className="bg-black text-white p-2 rounded">
        Sign up
      </button>
      <span className=" flex gap-2">You already have an account?
        <Link to={'/login'} className="underline text-blue-900">Sign in here</Link>
      </span>
    </div>
  )
}

export default RegisterPage