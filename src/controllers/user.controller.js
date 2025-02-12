import { userModel as User } from "../model/user.model.js";
import bcrypt from "bcrypt";

//Probando la ruta de prueba

export const testUser = (req, res) => {
  return res.status(200).send({
    mesage: "Autorizacion Validate",
  });
};

export const register = async (req, res) => {
  try {
    const { name, nick, surname, email, password } = req.body;

    // Validar campos requeridos
    if (!name || !surname || !nick || !email || !password) {
      return res.status(400).send({
        status: "error",
        message: "Faltan datos por enviar",
      });
    }

    // Verificar si el email ya está registrado
    const existEmail = await User.findOne({ email });
    if (existEmail) {
      return res.status(400).send({
        status: "error",
        message: "El correo electrónico ya está registrado",
      });
    }

    // Verificar si el nickname ya está registrado
    const existNickname = await User.findOne({ nick });
    if (existNickname) {
      return res.status(400).send({
        status: "error",
        message: "El nombre de usuario ya está registrado",
      });
    }

    // Encriptar la contraseña
    const pass = await bcrypt.hash(password, 10);

    // Crear nuevo usuario
    const newUser = new User({
      name,
      surname,
      nick,
      email,
      password: pass,
    });

    // Guardar usuario en la base de datos
    const savedUser = await newUser.save();

    // Responder con éxito
    return res.status(201).send({
      status: "success",
      message: "Usuario registrado exitosamente",
      user: {
        id: savedUser._id,
        name: savedUser.name,
        surname: savedUser.surname,
        nick: savedUser.nick,
        email: savedUser.email,
      },
    });
  } catch (error) {
    // Manejar errores del servidor
    return res.status(500).send({
      status: "error",
      message: "Ocurrió un error al registrar el usuario",
      error: error.message,
    });
  }
};

export const findUser = async (req, res) => {
  const id = req.params.id;

  try {
    const users = await User.findById(id);

    res.send({
      status: "success",
      message: "acción de buscar usuario",
      users,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: "Error al buscar usuario",
      error: error.message,
    });
  }
};
