import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isAuthenticated = true;
  if (isAuthenticated) {
    return <Outlet />;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
