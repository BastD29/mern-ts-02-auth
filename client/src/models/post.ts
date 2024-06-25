import { UserType } from "./user";

type PostStateType = {
  posts: PostType[] | null;
  // posts: PostType[];
};

type PostType = {
  _id?: string;
  title: string;
  description: string;
  author: UserType;
};

export type { PostType, PostStateType };
