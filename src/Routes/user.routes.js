import { Router } from "express";
import {
  testUser,
  register,
  findUser,
} from "../controllers/user.controller.js";

const router = Router();

router.get("/", testUser);
router.post("/", register);
router.get("/:id", findUser);

export { router };
