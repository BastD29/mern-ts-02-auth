import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { createPost, updatePost } from "../../services/posts2";
import { useAuthContext } from "../../hooks/useAuthContext";
import { PostType } from "../../models/post";
import { UserType } from "../../models/user";
import { isTokenExpired } from "../../utils/auth";
import { usePostContext } from "../../hooks/usePostContext";
import { CREATE_POST, UPDATE_POST } from "../../constants/actions";
import { useNavigate, useParams } from "react-router-dom";
import style from "./PostForm.module.scss";

type FormDataType = {
  title: string;
  description: string;
};

const initialFormValues: FormDataType = {
  title: "",
  description: "",
};

const PostForm: FC = () => {
  const [formData, setFormData] = useState<FormDataType>(initialFormValues);
  const [error, setError] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();
  // console.log("id:", id);
  const navigate = useNavigate();

  const {
    state: { token, user },
  } = useAuthContext();

  const {
    state: { posts },
    dispatch,
  } = usePostContext();

  useEffect(() => {
    if (id) {
      setIsEditing(true);
      if (posts) {
        const postToEdit = posts.find((post) => post._id === id);
        if (postToEdit) {
          setFormData({
            title: postToEdit.title,
            description: postToEdit.description,
          });
        }
      }
    }
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!user) {
      setError("User information is missing.");
      return;
    }

    if (!token || isTokenExpired(token)) {
      setError("Token is missing or expired.");
      return;
    }

    const postData: PostType = {
      ...formData,
      author: user as UserType,
    };

    try {
      let response;
      if (isEditing && id) {
        response = await updatePost(id, postData, token);
        if (response) {
          dispatch({ type: UPDATE_POST, payload: response });
        }
      } else {
        response = await createPost(postData, token);
        if (response) {
          dispatch({ type: CREATE_POST, payload: response });
        }
      }
      if (response) {
        navigate("/posts");
      } else {
        setError("Failed to submit post. Response was undefined.");
      }
    } catch (error) {
      setError("An error occurred while submitting the post.");
      console.error("Post submission failed", error);
    }
  };

  return (
    <form className={style["post-form"]} onSubmit={handleSubmit}>
      <h2>{isEditing ? "Edit Post" : "Create a New Post"}</h2>
      {error && <p className={style["error"]}>{error}</p>}
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        required
        placeholder="Title"
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        required
        placeholder="Description"
      />
      <button type="submit">{isEditing ? "Update" : "Submit"}</button>
    </form>
  );
};

export default PostForm;
