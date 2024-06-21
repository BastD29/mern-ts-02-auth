import {
  AUTH,
  BASE_URL,
  LOGIN,
  LOGOUT,
  ME,
  REGISTER,
} from "../constants/endpoints";
import { AuthResponseType } from "../models/auth2";
import { UserType } from "../models/user";

type RegisterDataType = {
  name: string;
  email: string;
  password: string;
};

type LoginDataType = {
  email: string;
  password: string;
};

type UserProfileType = {
  user: Omit<UserType, "password">;
};

const register = async (
  registerData: RegisterDataType
): Promise<AuthResponseType | undefined> => {
  try {
    const res = await fetch(`${BASE_URL}${AUTH}${REGISTER}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
    });
    const data = await res.json();
    if (!res.ok) {
      console.error(data.message);
    }
    console.log("data from register service:", data);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Register error:", error.message);
    } else {
      console.error("Register error:", "Unknown error");
    }
  }
};

const login = async (
  loginData: LoginDataType
): Promise<AuthResponseType | undefined> => {
  try {
    const res = await fetch(`${BASE_URL}${AUTH}${LOGIN}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    const data = await res.json();
    if (!res.ok) {
      console.error(data.message);
    }
    console.log("data from login service:", data);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Login error:", error.message);
    } else {
      console.error("Login error:", "Unknown error");
    }
  }
};

const getMe = async (token: string): Promise<UserProfileType | undefined> => {
  try {
    const res = await fetch(`${BASE_URL}${AUTH}${ME}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      // body: JSON.stringify(token),
    });
    const data = await res.json();
    if (!res.ok) {
      console.error(data.message);
      return undefined;
    }
    console.log("data from getMe service:", data);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("getMe error:", error.message);
    } else {
      console.error("getMe error:", "Unknown error");
    }
    return undefined;
  }
};

const logout = async (token: string): Promise<void> => {
  try {
    const res = await fetch(`${BASE_URL}${AUTH}${LOGOUT}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    if (!res.ok) {
      console.error(data.message);
    }
    console.log("data from logout:", data);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Logout error:", error.message);
    } else {
      console.error("Logout error:", "Unknown error");
    }
  }
};

export { register, login, logout, getMe };
