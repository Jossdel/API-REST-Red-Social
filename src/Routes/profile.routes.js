import { Router } from "express";
import { profile } from "../controllers/profile.controller.js";
import { verify } from "../middlewares/auth.js";
const router = Router();

router.get("/user/profile/:id", verify, profile);
export { router };
