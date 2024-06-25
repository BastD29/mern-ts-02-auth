import { FC } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { logout } from "../../services/auth2";
import { LOGOUT } from "../../constants/actions";
import style from "./Header.module.scss";

const Header: FC = () => {
  const { state, dispatch } = useAuthContext();

  const handleLogout = async () => {
    if (state.token) {
      await logout(state.token);
      localStorage.removeItem("token");
      dispatch({ type: LOGOUT });
    }
  };

  return (
    <header className={style["header"]}>
      <h2>Header</h2>
      {state.user && (
        <div className={style["header__profile"]}>
          <p>Welcome, {state.user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </header>
  );
};

export default Header;
