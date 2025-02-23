import login from "../controllers/login.controller.js";
import { Router } from "express";
export const router = Router();

router.post("/login", login);
