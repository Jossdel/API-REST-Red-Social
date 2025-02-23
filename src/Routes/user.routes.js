import { Router } from "express";
import { register, findUser } from "../controllers/user.controller.js";
import verify from "../middlewares/Auth.js";

const router = Router();

router.post("/", register);
router.get("user/:id", findUser);

export { router };
