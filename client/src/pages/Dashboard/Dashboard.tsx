// import { FC } from "react";
// import { useAuthContext } from "../../hooks/useAuthContext";
// import { logout } from "../../services/auth2";
// import { LOGOUT } from "../../constants/actions";
// import style from "./Dashboard.module.scss";

// const Dashboard: FC = () => {
//   const { dispatch, state } = useAuthContext();

//   console.log("state.user", state.user);

//   const handleLogout = async () => {
//     try {
//       await logout();
//       dispatch({ type: LOGOUT });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   if (state.loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className={style["dashboard"]}>
//       <h2>Dashboard</h2>
//       {state.user && (
//         <div className={style["dashboard__profile"]}>
//           <p>Welcome, {state.user.email}</p>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;
