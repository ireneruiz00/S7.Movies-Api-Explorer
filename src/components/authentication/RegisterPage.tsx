import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useRedirectPath } from "../../hooks/useRedirectPath"
import { signup } from "../../services/authServices"
import AuthForm from "./AuthForm"

function RegisterPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const from = useRedirectPath()

  const handleSignUp = async () => {
    try {
      await signup(email, password)
      navigate(from, { replace: true })
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <div className="mt-50">
      <AuthForm
        title="Create account"
        error={error}
        onSubmit={handleSignUp}
        setEmail={(e) => setEmail(e.target.value)}
        setPassword={(e) => setPassword(e.target.value)}
        ctaText="You already have an account?"
        ctaLink="/login"
        ctaLinkText="Sign in here"
        buttonText="Sign Up"
      />
    </div>
  )
}

export default RegisterPage
