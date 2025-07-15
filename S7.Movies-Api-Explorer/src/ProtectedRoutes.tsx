import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./context/AuthProvider"; 
import type { JSX } from "react";

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { user } = useAuth();
  const location = useLocation();


  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute