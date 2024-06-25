import {
  CREATE_POST,
  DELETE_POST,
  SET_POSTS,
  UPDATE_POST,
} from "../constants/actions";
import { PostActionType } from "../models/action2";
import { PostStateType } from "../models/post";

const initialPostState: PostStateType = {
  posts: null,
  // posts: [],
};

const postReducer = (
  state: PostStateType,
  action: PostActionType
): PostStateType => {
  switch (action.type) {
    case SET_POSTS:
      return {
        posts: action.payload,
      };
    case CREATE_POST:
      return {
        posts: [action.payload, ...(state.posts || [])],
      };
    case UPDATE_POST:
      return {
        posts:
          state.posts?.map((post) =>
            post._id === action.payload._id ? action.payload : post
          ) || null,
      };
    case DELETE_POST:
      return {
        posts:
          state.posts?.filter((post) => post._id !== action.payload._id) ||
          null,
      };
    default:
      return state;
  }
};

export { initialPostState, postReducer };
