import { UserType } from "./user";

type PostType = {
  title: string;
  description: string;
  author: UserType;
};

export type { PostType };
