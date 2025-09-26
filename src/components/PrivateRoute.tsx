import { useAuth0 } from "@auth0/auth0-react";
import type { JSX } from "@emotion/react/jsx-runtime";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: JSX.Element;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {

  const { isAuthenticated, user } = useAuth0();
  console.log({ isAuthenticated,  user });

  
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}
