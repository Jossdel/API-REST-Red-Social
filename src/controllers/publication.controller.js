//Probando la ruta de prueba
const testPublication = (req, res) => {
  return res.status(200).send({
    mesage: "Probando ruta Publication",
  });
};

export { testPublication };
