import { FC, useEffect } from "react";
import Header from "../../Header/Header2";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";
import style from "./AuthLayout.module.scss";

const AuthLayout: FC = () => {
  const { state } = useAuthContext();
  const navigate = useNavigate();

  // prevent redirect to /auth if logged in
  useEffect(() => {
    if (state.token) {
      navigate("/");
    }
  }, [state.token, navigate]);

  return (
    <div className={style["auth-layout"]}>
      <Header />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
