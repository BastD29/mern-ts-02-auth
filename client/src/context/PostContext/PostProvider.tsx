import { FC, ReactNode, useReducer } from "react";
import { initialPostState, postReducer } from "../../reducers/postReducer";
import { PostContext } from "./PostContext";

type PostProviderProps = {
  children: ReactNode;
};

export const PostProvider: FC<PostProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialPostState);

  console.log("initialPostState:", state);

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};
