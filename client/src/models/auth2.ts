import { UserType } from "./user";

type AuthStateType = {
  // isAuthenticated: boolean;
  user: Omit<UserType, "password"> | null;
  token: string | null;
};

type AuthResponseType = {
  token: string;
  user: Omit<UserType, "password">;
  error: string;
};

export type { AuthStateType, AuthResponseType };
