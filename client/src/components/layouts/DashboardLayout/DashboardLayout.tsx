import { FC, useEffect } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../Header/Header";
import style from "./DashboardLayout.module.scss";

const DashboardLayout: FC = () => {
  const { state } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.token) {
      navigate("/auth/signin");
    }
  }, [state.token, navigate]);

  // if (!state.token) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div className={style["dashboard-layout"]}>
      <Header />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
