import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { register } from "../../services/auth2";
import { useNavigate } from "react-router-dom";
import style from "./SignUp.module.scss";
import { LOGIN } from "../../constants/actions";

type FormDataType = {
  name: string;
  email: string;
  password: string;
};

const SignUp: FC = () => {
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const response = await register(formData);
      if (response) {
        localStorage.setItem("token", response.token);
        dispatch({
          type: LOGIN,
          payload: { token: response.token, user: response.user },
        });
      }
      navigate("/dashboard");
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form className={style["signup"]} onSubmit={handleSubmit}>
      <h2>Sign up</h2>
      {error && <p className={style["error"]}>{error}</p>}
      <input
        type="text"
        name="name"
        value={formData.name}
        required
        onChange={handleInputChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        required
        onChange={handleInputChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        required
        onChange={handleInputChange}
        placeholder="Password"
      />
      <button type="submit">Sign up</button>
    </form>
  );
};

export default SignUp;
