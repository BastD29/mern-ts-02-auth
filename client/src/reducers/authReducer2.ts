import { LOGIN, LOGOUT, SET_USER } from "../constants/actions";
import { AuthActionType } from "../models/action2";

import { AuthStateType } from "../models/auth2";

const initialAuthState: AuthStateType = {
  user: null,
  token: localStorage.getItem("token"),
};

const authReducer = (
  state: AuthStateType,
  action: AuthActionType
): AuthStateType => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        user: null,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export { initialAuthState, authReducer };
