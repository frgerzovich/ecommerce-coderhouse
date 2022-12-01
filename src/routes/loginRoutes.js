import { Router } from "express";
const router = Router();
import passport from "../utils/passportConfig.js";
import { postLogin } from "../controllers/loginController.js";

router.post("/", passport.authenticate("login"), postLogin);

export default router;
