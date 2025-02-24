import { userModel as User } from "../model/user.model.js";
import bcrypt from "bcrypt";
import mongoosePagination from "mongoose-pagination";

//Probando la ruta de prueba

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

// Listar usuarios

export const listar = async (req, res) => {
  try {
    let page = parseInt(req.params.page) || 1;
    if (page < 1) page = 1;

    const itemsPerPage = 5;

    const users = await User.find().sort("_id").paginate(page, itemsPerPage);

    if (!users || users.length === 0) {
      return res.status(404).send({
        status: "error",
        message: "No hay usuarios para mostrar",
      });
    }

    const total = await User.countDocuments();

    res.status(200).send({
      status: "success",
      message: "Listar usuarios",
      users,
      itemsPerPage,
      total,
      totalPages: Math.ceil(total / itemsPerPage),
      page,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: "Error en el servidor",
      error: error.message,
    });
  }
};
