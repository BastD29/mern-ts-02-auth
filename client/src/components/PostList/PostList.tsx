import { FC, useEffect, useState } from "react";
import { usePostContext } from "../../hooks/usePostContext";
import { getPosts } from "../../services/posts2";
import { SET_POSTS } from "../../constants/actions";
import { useAuthContext } from "../../hooks/useAuthContext";
import PostItem from "../PostItem/PostItem";
import style from "./PostList.module.scss";
import { isTokenExpired } from "../../utils/auth";

const PostList: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const {
    state: { posts },
    dispatch,
  } = usePostContext();

  const {
    state: { token },
  } = useAuthContext();

  console.log("posts:", posts);

  useEffect(() => {
    const fetchPosts = async () => {
      // prevents getPosts being called uselessly if no token
      if (!token || isTokenExpired(token)) {
        setIsLoading(false);
        return;
      }
      setIsLoading(true);

      try {
        const response = await getPosts(token);
        if (response) {
          dispatch({ type: SET_POSTS, payload: response });
        } else {
          setError("Failed to fetch posts");
        }
      } catch (error) {
        setError("Failed to fetch posts");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [dispatch, token]);

  return (
    <div className={style["post-list"]}>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && posts && posts.length > 0 && (
        <ul>
          {posts.map((post) => (
            <PostItem post={post} key={post._id} />
          ))}
        </ul>
      )}
      {!isLoading && !error && (!posts || posts.length === 0) && (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default PostList;
