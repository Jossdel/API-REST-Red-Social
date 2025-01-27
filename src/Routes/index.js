import { Router } from "express";
import { router as userRouter } from "./user.routes.js";
import { router as publicationRouter } from "./publication.routes.js";
import { router as followRouter } from "./follow.routes.js";

const router = Router();

router.use("/user", userRouter);
router.use("/publication", publicationRouter);
router.use("/follow", followRouter);
export { router };
