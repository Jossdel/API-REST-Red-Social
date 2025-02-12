import { Router } from "express";
import { router as userRouter, router as tesUser } from "./user.routes.js";
import { router as publicationRouter } from "./publication.routes.js";
import { router as followRouter } from "./follow.routes.js";
import { router as loginRouter } from "./login.routes.js";

const router = Router();

router.use("/user", userRouter);
router.use("/publication", publicationRouter);
router.use("/follow", followRouter);
router.use("/login", loginRouter);
router.use("/test", tesUser);
export { router };
