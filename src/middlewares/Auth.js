import { Router } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";

const verify = Router();

verify.use((req, res, next) => {
  let token = req.headers["x-access-token"] || req.headers["authorization"];
  if (!token) {
    return res.status(401).send({
      message: " No autorizado",
      status: 401,
    });
  }
  if (token.startsWith("Bearer")) {
    token = token.slice(7, token.length);
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).send({
          status: "false",
          error: ["token no valido"],
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  }
});
export default verify;
