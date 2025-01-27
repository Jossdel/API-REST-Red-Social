import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB is connected : RedSocial");
  } catch (error) {
    console.log("a ocurrico un error en la DB", error);
  }
};
