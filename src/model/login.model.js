import validator from "validator";
import mongoose from "mongoose";

const loginSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    validate: {
      validator: (value) => {
        return !validator.isEmpty(value) && validator.isEmail(value);
      },
      message: " ingrese un correo electrónico.",
    },
  },
  password: {
    type: String,
    required: [true, "pasword required"],
  },
});

const loginModel = mongoose.model("Login", loginSchema, "login");
export default loginModel;
