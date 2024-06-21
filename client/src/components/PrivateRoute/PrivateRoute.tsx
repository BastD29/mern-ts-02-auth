// import { FC, ReactNode } from "react";
// import { useAuthContext } from "../../hooks/useAuthContext";
// import { Navigate } from "react-router-dom";

// type PrivateRouteProps = {
//   children: ReactNode;
// };

// const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
//   const { state } = useAuthContext();

//   console.log("state.user:", state.user);

//   if (state.loading) {
//     return <div>Loading...</div>;
//   }

//   return state.user ? children : <Navigate to="/signin" />;
// };

// export default PrivateRoute;
