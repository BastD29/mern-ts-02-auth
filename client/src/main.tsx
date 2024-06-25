import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.tsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext/AuthProvider3.tsx";
import { PostProvider } from "./context/PostContext/PostProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PostProvider>
          <App />
        </PostProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
