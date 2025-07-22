import { useLocation } from "react-router-dom"


export const useRedirectPath = (fallback = "/movies") => {
    const location = useLocation()
    return (location.state as any)?.from?.pathname || fallback
}
  