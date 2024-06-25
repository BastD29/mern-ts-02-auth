// import { FC, useEffect } from "react";
// import { NavLink, Outlet, useNavigate } from "react-router-dom";
// import { useAuthContext } from "../../hooks/useAuthContext";
// import style from "./Home.module.scss";

// const Home: FC = () => {
//   const navigate = useNavigate();
//   const { state } = useAuthContext();

//   const renderHeading = () => {
//     switch (location.pathname) {
//       case "/signin":
//         return "Already have an account? Please sign in";
//       case "/signup":
//         return "Don't have an account yet? Please register";
//       default:
//         return "Welcome, please connect";
//     }
//   };

//   useEffect(() => {
//     if (state.token) {
//       navigate("/dashboard");
//     }
//   }, [state.token, []]);

//   return (
//     <div className={style["home"]}>
//       <h2>{renderHeading()}</h2>
//       <nav className={style["home__nav"]}>
//         <NavLink
//           to="/signin"
//           className={({ isActive }) => (isActive ? style["active"] : "")}
//         >
//           Sign in
//         </NavLink>
//         <NavLink
//           to="/signup"
//           className={({ isActive }) => (isActive ? style["active"] : "")}
//         >
//           Sign up
//         </NavLink>
//       </nav>
//       <Outlet />
//     </div>
//   );
// };

// export default Home;
