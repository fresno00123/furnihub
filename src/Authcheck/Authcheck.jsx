import { useLocation, Navigate } from "react-router-dom";

const Authcheck = ({ children }) => {
  const isAuthenticate = true;
  const location = useLocation();

  if (!isAuthenticate) {
    return (
      <Navigate
        to="/auth/login"
        state={{
          from: location,
        }}
      />
    );
  }
  return children;
};

export default Authcheck;
