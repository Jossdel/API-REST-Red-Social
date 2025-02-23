import { Router } from "express";
import { router as userRouter } from "./user.routes.js";
import { router as publicationRouter } from "./publication.routes.js";
import { router as followRouter } from "./follow.routes.js";
import { router as loginRouter } from "./login.routes.js";
import { router as profileRouter } from "./profile.routes.js";

const router = Router();

router.use("/", userRouter);
router.use("/", publicationRouter);
router.use("/", followRouter);
router.use("/", loginRouter);
router.use("/", profileRouter);
export { router };
