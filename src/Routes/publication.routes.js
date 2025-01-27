import { Router } from "express";
import { testPublication } from "../controllers/publication.controller.js";
const router = Router();

router.get("/", testPublication);

export { router };
