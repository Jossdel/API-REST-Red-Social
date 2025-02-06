import { userModel as User } from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_EXPIRES } from "../config.js";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!password || !email) {
      return res.status(400).send({
        message: "Datos incompletos",
      });
    }
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).send({
        message: "Usuario no encontrado",
      });
    }
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).send({
        message: "Contraseña incorrecta",
      });
    }
    const token = jwt.sign({ id: user._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES,
    });
    const usuario = {
      name: user.name,
      surname: user.surname,
      email: user.email,
      nick: user.nick,
      token: token,
    };

    return res.status(200).send({
      message: "Probando ruta Login",
      data: usuario,
      message: "Usuario logeado correctamente",
    });
  } catch (error) {
    return res.status(500).send({
      message: "Error en el servidor",
    });
  }
};
export default login;
