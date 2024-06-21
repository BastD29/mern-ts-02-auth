import { FC, ReactNode } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
  children: ReactNode;
};

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const { state } = useAuthContext();

  console.log("state.user:", state.user);

  // if (!state.isAuthenticated) {
  //   return <Navigate to="/signin" />;
  // }

  if (!state.token) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default PrivateRoute;
