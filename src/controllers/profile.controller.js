import { userModel as User } from "../model/user.model.js";

export const profile = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id).select({ password: 0, role: 0 });
    if (!user) {
      return res.send({
        status: "error",
        message: "Usuario no encontrado",
      });
    }
    res.send({
      status: "success",
      message: "acción de buscar usuario",
      user,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: "Error al buscar usuario",
      error: error.message,
    });
  }
};
