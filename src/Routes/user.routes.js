import { Router } from "express";
import { register, listar } from "../controllers/user.controller.js";
import verify from "../middlewares/Auth.js";

const router = Router();

router.post("/register", register);
router.get("/list/:page?", verify, listar);

export { router };
