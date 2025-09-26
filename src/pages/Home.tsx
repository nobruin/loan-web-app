import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export default function Home() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div>
      <h1>Loan App</h1>
      {isAuthenticated ? (
        <>
          <p>Welcome, {user?.name || "User"}!</p>
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Logout
          </button>
          <br />
           <Link to="/register">Register</Link>
        </>
      ) : (
        <button onClick={() => loginWithRedirect()}>Login</button>
      )}
    </div>
  );
}
