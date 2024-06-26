import { Route, Routes } from "react-router-dom";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp2";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import PostList from "../PostList/PostList";
import PostForm from "../PostForm/PostForm";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="posts" element={<PostList />} />
        <Route path="posts/new" element={<PostForm />} />
      </Route>

      <Route path="/auth" element={<AuthLayout />}>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}
