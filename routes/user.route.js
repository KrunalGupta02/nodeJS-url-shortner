import { Router } from "express";
import { handleUserLogin, handleUserSignUp } from "../controllers/user.controller.js";

const router = Router();

router.route("/").post(handleUserSignUp);

router.route("/login").post(handleUserLogin)

export default router;