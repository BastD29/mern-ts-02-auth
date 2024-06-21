import { Context, Dispatch, createContext } from "react";
import { AuthStateType } from "../../models/auth2";
import { AuthActionType } from "../../models/action2";

type AuthContextType = {
  state: AuthStateType;
  dispatch: Dispatch<AuthActionType>;
};

export const AuthContext: Context<AuthContextType | undefined> = createContext<
  AuthContextType | undefined
>(undefined);
