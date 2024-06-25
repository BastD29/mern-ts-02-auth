import { useContext } from "react";
import { PostContext } from "../context/PostContext/PostContext";

export const usePostContext = () => {
  const context = useContext(PostContext);

  if (!context) {
    throw new Error("usePostContext must be used within an PostProvider");
  }

  return context;
};
