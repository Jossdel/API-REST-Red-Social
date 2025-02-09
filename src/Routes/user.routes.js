import { Router } from "express";
import { testUser, register } from "../controllers/user.controller.js";
import { verify } from "../middlewares/auth.js";

const router = Router();

router.get("/test", verify, testUser);
router.post("/user", register);

export { router };
