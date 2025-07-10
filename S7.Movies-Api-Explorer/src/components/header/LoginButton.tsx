import { Link } from "react-router-dom"

function LoginButton() {
  return (
    <Link 
    to='/login'
    className="text-xl font-semibold bg-yellow-400 py-2 px-6 rounded-xs hover:bg-yellow-200"
    >LOGIN
    </Link>
  )
}

export default LoginButton