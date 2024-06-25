import { FC, ReactNode, useEffect, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer, initialAuthState } from "../../reducers/authReducer2";
import { getMe } from "../../services/auth2";
import { LOGOUT, SET_USER } from "../../constants/actions";
import { isTokenExpired } from "../../utils/auth";

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  console.log("initialAuthState:", state);

  useEffect(() => {
    const fetchProfile = async () => {
      if (state.token) {
        console.log("isTokenExpired:", isTokenExpired(state.token));
        if (isTokenExpired(state.token)) {
          localStorage.removeItem("token");
          dispatch({ type: LOGOUT });
        } else {
          try {
            const profile = await getMe(state.token);
            if (profile?.user) {
              dispatch({ type: SET_USER, payload: profile.user });
            }
          } catch (error) {
            console.error("Failed to fetch profile", error);
          }
        }
      }
    };

    fetchProfile();
  }, [state.token, dispatch]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
