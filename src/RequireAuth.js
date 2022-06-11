import { Navigate } from "react-router-dom";

function RequireAuth({ children }) {
  let isAuthenticated = true;
  return isAuthenticated ? children : <Navigate to={"/login"} />;
}

export default RequireAuth;
