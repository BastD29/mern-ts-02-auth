import { FC } from "react";
import style from "./PostList.module.scss";

const PostList: FC = () => {
  return (
    <div className={style["post-list"]}>
      <h2>Post List</h2>
    </div>
  );
};

export default PostList;
