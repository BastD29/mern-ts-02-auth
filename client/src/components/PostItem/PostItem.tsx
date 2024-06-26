// import { FC, useState } from "react";
// import { PostType } from "../../models/post";
// import { updatePost } from "../../services/posts2";
// import { UserType } from "../../models/user";
// import { useAuthContext } from "../../hooks/useAuthContext";
// import { isTokenExpired } from "../../utils/auth";
// import { usePostContext } from "../../hooks/usePostContext";
// import { UPDATE_POST } from "../../constants/actions";
// import { useNavigate } from "react-router-dom";
// import style from "./PostItem.module.scss";

// type PostItemProps = {
//   post: PostType;
// };

// type FormDataType = {
//   title: string;
//   description: string;
// };

// const initialFormValues: FormDataType = {
//   title: "",
//   description: "",
// };

// const PostItem: FC<PostItemProps> = ({ post }) => {
//   const [formData, setFormData] = useState<FormDataType>(initialFormValues);
//   const [error, setError] = useState<string>("");
//   const navigate = useNavigate();

//   const {
//     state: { token, user },
//   } = useAuthContext();

//   const { dispatch } = usePostContext();

//   const handleUpdate = async (postId: string) => {
//     if (!token || isTokenExpired(token)) {
//       setError("Token is missing or expired.");
//       return;
//     }

//     const postData: PostType = {
//       ...formData,
//       author: user as UserType,
//     };
//     try {
//       const response = await updatePost(postData, postId, token);
//       if (response) {
//         dispatch({ type: UPDATE_POST, payload: response });
//         navigate("/posts");
//       } else {
//         setError("Failed to update post. Response was undefined.");
//       }
//     } catch (error) {
//       setError("An error occurred while updating the post.");
//       console.error("Post update failed", error);
//     }
//   };

//   const handleDelete = async () => {};

//   return (
//     <div className={style["post-item"]}>
//       <div className={style["post-item__info"]}>
//         <h3>{post.title}</h3>
//         <p>{post.description}</p>
//       </div>
//       <div className={style["post-item__buttons"]}>
//         <button>Update</button>
//         <button>Delete</button>
//       </div>
//     </div>
//   );
// };

// export default PostItem;
