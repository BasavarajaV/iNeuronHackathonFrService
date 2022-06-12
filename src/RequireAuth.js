import { Navigate } from "react-router-dom";

function RequireAuth({ children }) {
  let isAuthenticated = localStorage.getItem("isAuthenticated");
  console.log("isAuthenticated", isAuthenticated);
  return isAuthenticated ? children : <Navigate to={"/login"} />;
}

export default RequireAuth;
