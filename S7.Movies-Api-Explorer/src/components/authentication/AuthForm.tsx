import { Link } from "react-router-dom"
import type { FormProps } from "../../types/props"
import AuthInput from "./AuthInput"


function AuthForm({ title, onSubmit, error,  ctaText,  ctaLink,  ctaLinkText,  setEmail,  setPassword,  buttonText}: FormProps) {
  return (
    <div className="flex flex-col gap-4 shadow bg-yellow-400 p-6 rounded-xl max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold">{title}</h2>
      {error && <p className="text-red-700">{error}</p>}
      <AuthInput placeholder="Email" type="email" onChange={setEmail} />
      <AuthInput placeholder="Password" type="password" onChange={setPassword} />
      <button
        onClick={onSubmit}
        className="bg-[#00303F] text-white p-2 rounded hover:bg-yellow-400 hover:border"
      >
        {buttonText}
      </button>
      <span className="flex gap-1">
        {ctaText}
        <Link to={ctaLink} className="underline text-[#00303F]">
          {ctaLinkText}
        </Link>
      </span>
    </div>
  );
}

export default AuthForm