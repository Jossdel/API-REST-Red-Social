import { Router } from "express";
import verify from "../middlewares/Auth.js";
import { profile } from "../controllers/profile.controller.js";
const router = Router();
router.get("/profile/:id", verify, profile);

export { router };
