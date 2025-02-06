import mongoose from "mongoose";
import { MONGO_URI } from "../src/config.js";
export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB is connected : RedSocial");
  } catch (error) {
    console.log("a ocurrico un error en la DB", error);
  }
};
