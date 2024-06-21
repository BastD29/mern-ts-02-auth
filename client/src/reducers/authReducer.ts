// import { LOGIN, LOGOUT, REGISTER } from "../constants/actions";
// import { AuthActionType } from "../models/action";
// import { AuthStateType } from "../models/auth";

// const initialAuthState: AuthStateType = {
//   user: undefined,
//   loading: true,
// };

// const authReducer = (
//   state: AuthStateType,
//   action: AuthActionType
// ): AuthStateType => {
//   switch (action.type) {
//     case REGISTER:
//       return { ...state, user: action.payload, loading: false };
//     case LOGIN:
//       return { ...state, user: action.payload, loading: false };
//     case LOGOUT:
//       return { ...state, user: undefined, loading: false };
//     default:
//       return state;
//   }
// };

// export { initialAuthState, authReducer };
