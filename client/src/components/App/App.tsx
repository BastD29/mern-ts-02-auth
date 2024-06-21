import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp2";
import Dashboard from "../../pages/Dashboard/Dashboard2";
import PrivateRoute from "../PrivateRoute/PrivateRoute2";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
      {/* <Route path="/reset-password" element={<ResetPassword />} /> */}

      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
