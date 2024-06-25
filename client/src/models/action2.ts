import {
  CREATE_POST,
  DELETE_POST,
  LOGIN,
  LOGOUT,
  SET_POSTS,
  SET_USER,
  UPDATE_POST,
} from "../constants/actions";
import { PostType } from "./post";
import { UserType } from "./user";

// AUTH

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

// POSTS

type SetPostsActionType = { type: typeof SET_POSTS; payload: PostType[] };
type CreatePostActionType = { type: typeof CREATE_POST; payload: PostType };
type UpdatePostActionType = { type: typeof UPDATE_POST; payload: PostType };
type DeletePostActionType = {
  type: typeof DELETE_POST;
  payload: { _id: string };
};

type PostActionType =
  | SetPostsActionType
  | CreatePostActionType
  | UpdatePostActionType
  | DeletePostActionType;

export type { AuthActionType, PostActionType };
