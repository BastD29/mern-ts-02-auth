import { FC, ReactNode, useEffect, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer, initialAuthState } from "../../reducers/authReducer2";
import { getMe } from "../../services/auth2";
import { SET_USER } from "../../constants/actions";

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  useEffect(() => {
    const fetchProfile = async () => {
      if (state.token) {
        try {
          const profile = await getMe(state.token);
          if (profile?.user) {
            dispatch({ type: SET_USER, payload: profile.user });
          }
        } catch (error) {
          console.error("Failed to fetch profile", error);
        }
      }
    };

    fetchProfile();
  }, [state.token]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
