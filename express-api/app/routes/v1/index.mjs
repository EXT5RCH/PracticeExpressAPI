import express from "express";
import { router as article } from "./article.mjs";
import { router as user } from "./user.mjs";

const router = express.Router();
router.use("/article", article);
router.use("/user", user);

export default router;
