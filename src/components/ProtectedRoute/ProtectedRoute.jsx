import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/context";
import { UserContext } from "../../context/user_context";

export const ProtectedRoute = ({ redirectPath = "/login"}) => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to={redirectPath} replace={true} />;
  }
  return <Outlet/>;
};

