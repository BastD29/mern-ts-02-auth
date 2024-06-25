// import { FC } from "react";
// import { Navigate, Outlet } from "react-router-dom";
// import { useAuthContext } from "../../hooks/useAuthContext";

// const PrivateRoute: FC<{ redirectPath: string }> = ({ redirectPath }) => {
//   const { state } = useAuthContext();

//   if (state.token) {
//     return <Navigate to={redirectPath} replace />;
//   }

//   return <Outlet />;
// };

// export default PrivateRoute;
