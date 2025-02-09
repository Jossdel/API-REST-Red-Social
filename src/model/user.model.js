import { Schema, model } from "mongoose";
import validator from "validator";

const userSchema = Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    trim: true,
  },
  surname: {
    type: String,
  },
  nick: {
    trim: true,
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => {
        return (
          value,
          validator.isLength === 6 && validator.isLength <= 12,
          validator.isAlphanumeric(value)
        );
      },
      message:
        "el Nickname debe contener minimo 4 caracteres o max 10 solo puede contener letras y numeros ",
    },
  },
  email: {
    trim: true,
    type: String,
    unique: true,
    lowercase: true,
    required: [true, "Email is required"],

    validate: {
      validator: (value) => {
        return !validator.isEmpty(value) && validator.isEmail(value);
      },
      message: " ingrese un correo electrónico.",
    },
  },
  password: {
    trim: true,
    type: String,
    required: [true, "pasword required"],
    validate: {
      validator: (value) => {
        return validator.isLength(
          value,
          validator.isLength === 6 && validator.isLength <= 12
        );
      },
      message: "La contraseña debe tener entre 6 y 12 caracteres",
    },
  },
  role: {
    type: String,
    default: "role_user",
  },
  image: {
    type: String,
    default: "default.png",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export const userModel = model("User", userSchema, "users");
