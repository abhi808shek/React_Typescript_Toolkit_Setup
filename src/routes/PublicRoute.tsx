import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const isAuthenticated = true;
  if (!isAuthenticated) {
    return <Outlet />;
  }
  return <Navigate to="/" />;
};

export default PublicRoute;
