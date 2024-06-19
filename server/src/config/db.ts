import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    const mongoDBUrl = process.env.MONGODB_URL;
    if (!mongoDBUrl) {
      throw new Error(
        "MONGODB_URL is not defined in the environment variables"
      );
    }

    const conn = await mongoose.connect(mongoDBUrl);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
