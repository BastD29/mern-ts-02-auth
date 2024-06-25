import { jwtDecode } from "jwt-decode";

// check if token is expired to automatically logout
const isTokenExpired = (token: string): boolean => {
  //   console.log("token:", token);

  if (!token) return true;

  try {
    const decodedToken: { exp?: number } = jwtDecode(token);
    // console.log("decodedToken:", decodedToken);

    if (!decodedToken || typeof decodedToken.exp !== "number") {
      return true;
    }
    const currentTime = Date.now() / 1000;
    return decodedToken.exp < currentTime;
  } catch (error) {
    console.error("Error decoding token:", error);
    return true;
  }
};

export { isTokenExpired };
