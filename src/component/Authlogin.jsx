import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";
function Authlogin() {
  const {
    isLoading, // Loading state, the SDK needs to reach Auth0 on load
    isAuthenticated,
    error,
    loginWithRedirect: login, // Starts the login flow
    logout: auth0Logout, // Starts the logout flow
    user, // User profile
  } = useAuth0();

  const signup = () =>
    login({ authorizationParams: { screen_hint: "signup" } });

  const logout = () =>
    auth0Logout({ logoutParams: { returnTo: window.location.origin } });

  if (isLoading) return "Loading...";

  return isAuthenticated ? (
    <>
     <div >
      <Profile/>
      
      </div>

    </>
  ) : (
    <>
      {error && <p>Error: {error.message}</p>}

      

      <button className='px-3 bg-gray-500 mx-3 py-1 text-white rounded-md' onClick={login}>Login</button>
    </>
  );
}

export default Authlogin;
