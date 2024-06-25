import { Context, Dispatch, createContext } from "react";
import { PostStateType } from "../../models/post";
import { PostActionType } from "../../models/action2";

type PostContextType = {
  state: PostStateType;
  dispatch: Dispatch<PostActionType>;
};

export const PostContext: Context<PostContextType | undefined> = createContext<
  PostContextType | undefined
>(undefined);
