// import { FC } from "react";
// import { useAuthContext } from "../../hooks/useAuthContext";
// import { logout } from "../../services/auth2";
// import { LOGOUT } from "../../constants/actions";
// import PostList from "../../components/PostList/PostList";
// import style from "./Dashboard.module.scss";

// const Dashboard: FC = () => {
//   const { dispatch, state } = useAuthContext();

//   console.log("state.user", state.user);

//   const handleLogout = async () => {
//     if (state.token) {
//       await logout(state.token);
//       localStorage.removeItem("token");
//       dispatch({ type: LOGOUT });
//     }
//   };

//   return (
//     <div className={style["dashboard"]}>
//       <h2>Dashboard</h2>
//       {state.user && (
//         <div className={style["dashboard__profile"]}>
//           <p>Welcome, {state.user.email}</p>
//           <button onClick={handleLogout}>Logout</button>
//           <PostList />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;
