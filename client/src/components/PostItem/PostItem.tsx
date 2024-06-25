import { FC } from "react";
import style from "./PostItem.module.scss";
import { PostType } from "../../models/post";

type PostItemProps = {
  post: PostType;
};

const PostItem: FC<PostItemProps> = ({ post }) => {
  return (
    <div className={style["post-item"]}>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
    </div>
  );
};

export default PostItem;
