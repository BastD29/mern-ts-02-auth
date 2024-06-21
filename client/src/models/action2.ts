import { LOGIN, LOGOUT, SET_USER } from "../constants/actions";
import { UserType } from "./user";

type LoginActionType = {
  type: typeof LOGIN;
  payload: { token: string; user: Omit<UserType, "password"> };
};
type LogoutActionType = { type: typeof LOGOUT };
type SetUserActionType = {
  type: typeof SET_USER;
  payload: Omit<UserType, "password">;
};

type AuthActionType = LoginActionType | LogoutActionType | SetUserActionType;

export type { AuthActionType };
