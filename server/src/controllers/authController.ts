import User, { IUser } from "../models/userModel";

export const registerUser = async (user: Partial<IUser>) => {
  const { name, email, password } = user;
  if (!name || !email || !password) {
    return {
      error: "Please provide all the required fields",
    };
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return {
      error: "User with that email already exists.",
    };
  }
  const newUser = new User({ name, email, password });
  await newUser.save();
  const token = await newUser.generateAuthToken();
  // console.log("token:", token);

  return {
    user: newUser,
    token,
  };
};

export const loginUser = async (user: Partial<IUser>) => {
  const { email, password } = user;
  if (!email || !password) {
    return {
      error: "Please provide all the required fields",
    };
  }
  const existingUser = await User.findByCredentials(email, password);
  if (!existingUser) {
    return {
      error: "Invalid email or password.",
    };
  }
  const token = await existingUser.generateAuthToken();
  // console.log("token:", token);

  return {
    user: existingUser,
    token,
  };
};
