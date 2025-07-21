import AuthForm from "./AuthForm"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRedirectPath } from "../../hooks/useRedirectPath";
import { login } from "../../services/authServices";


function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const from = useRedirectPath();

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err: any) {
      setError(err.message);
    }
  };
  return (
    <div className="mt-50">
      <AuthForm
      title="Login"
      error={error}
      onSubmit={handleLogin}
      setEmail={(e) => setEmail(e.target.value)}
      setPassword={(e) => setPassword(e.target.value)}
      ctaText="You don't have an account?"
      ctaLink="/signUp"
      ctaLinkText="Sign up here"
      buttonText="Login"/>
    </div>
  )
}

export default LoginPage