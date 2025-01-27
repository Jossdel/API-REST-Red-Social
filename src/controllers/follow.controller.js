//Probando la ruta de prueba
const testFollow = (req, res) => {
  return res.status(200).send({
    mesage: "Probando ruta Follow",
  });
};

export { testFollow };
