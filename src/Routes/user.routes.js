import { Router } from "express";
import {
  testUser,
  register,
  findUser,
} from "../controllers/user.controller.js";
import verify from "../middlewares/Auth.js";

const router = Router();

router.get("/", verify, testUser);
router.post("/", register);
router.get("/:id", findUser);

export { router };
