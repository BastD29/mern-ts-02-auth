import { FC } from "react";
import { PostType } from "../../models/post";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { usePostContext } from "../../hooks/usePostContext";
import { deletePost } from "../../services/posts2";
import style from "./PostItem.module.scss";
import { DELETE_POST } from "../../constants/actions";

type PostItemProps = {
  post: PostType;
};

const PostItem: FC<PostItemProps> = ({ post }) => {
  const {
    state: { token },
  } = useAuthContext();
  const { dispatch } = usePostContext();

  const handleDelete = async () => {
    if (token && post._id) {
      try {
        await deletePost(post._id, token);
        dispatch({ type: DELETE_POST, payload: { _id: post._id } });
      } catch (error) {
        console.error("Failed to delete post", error);
      }
    }
  };

  return (
    <div className={style["post-item"]}>
      <div className={style["post-item__info"]}>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
      </div>
      <div className={style["post-item__buttons"]}>
        <Link
          className={style["post-item__delete"]}
          to={`/posts/edit/${post._id}`}
        >
          Update
        </Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default PostItem;
