import { Router } from "express";

import { testFollow } from "../controllers/follow.controller.js";
const router = Router();

router.get("/", testFollow);
export { router };
