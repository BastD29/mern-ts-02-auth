// import { FC, FormEvent, useState } from "react";
// import style from "./SignUp.module.scss";

// const SignUp: FC = () => {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [error, setError] = useState<string>("");

//   const handleSubmit = (event: FormEvent) => {
//     event.preventDefault();
//     console.log("handleSubmit");
//   };

//   return (
//     <form className={style["signup"]} onSubmit={handleSubmit}>
//       <h2>Sign up</h2>
//       {error && <p className={style["error"]}>{error}</p>}
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//         placeholder="Email"
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//         placeholder="Password"
//       />
//       <button type="submit">Sign up</button>
//     </form>
//   );
// };

// export default SignUp;
