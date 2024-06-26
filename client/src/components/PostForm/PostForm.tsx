import { ChangeEvent, FC, FormEvent, useState } from "react";
import { createPost } from "../../services/posts2";
import { useAuthContext } from "../../hooks/useAuthContext";
import { PostType } from "../../models/post";
import { UserType } from "../../models/user";
import { isTokenExpired } from "../../utils/auth";
import { usePostContext } from "../../hooks/usePostContext";
import { CREATE_POST } from "../../constants/actions";
import style from "./PostForm.module.scss";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const {
    state: { token, user },
  } = useAuthContext();

  const { dispatch } = usePostContext();

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
      const response = await createPost(postData, token);
      if (response) {
        dispatch({ type: CREATE_POST, payload: response });
        navigate("/posts");
      } else {
        setError("Failed to create post. Response was undefined.");
      }
    } catch (error) {
      setError("An error occurred while creating the post.");
      console.error("Post creation failed", error);
    }
  };

  return (
    <form className={style["post-form"]} onSubmit={handleSubmit}>
      <h2>Create a new post</h2>
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm;
