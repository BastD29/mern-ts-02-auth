import { FC } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { logout } from "../../services/auth2";
import { LOGOUT } from "../../constants/actions";
import { NavLink } from "react-router-dom";
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
      <nav className={style["header__nav"]}>
        <NavLink
          to="/auth/signin"
          className={({ isActive }) => (isActive ? style["active"] : "")}
        >
          Sign in
        </NavLink>
        <NavLink
          to="/auth/signup"
          className={({ isActive }) => (isActive ? style["active"] : "")}
        >
          Sign up
        </NavLink>
      </nav>

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
