// import { FC, ReactNode, useEffect, useReducer } from "react";
// import { authReducer, initialAuthState } from "../../reducers/authReducer";
// import { AuthContext } from "./AuthContext";
// import { LOGIN, LOGOUT } from "../../constants/actions";
// import { useLocalStorage } from "../../hooks/useLocalStorage";

// type AuthProviderProps = {
//   children: ReactNode;
// };

// export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
//   const [state, dispatch] = useReducer(authReducer, initialAuthState);
//   const { getItem } = useLocalStorage("user");

//   useEffect(() => {
//     const user = getItem();
//     console.log("user", user);

//     if (user) {
//       dispatch({ type: LOGIN, payload: user });
//     } else {
//       dispatch({ type: LOGOUT });
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ state, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
