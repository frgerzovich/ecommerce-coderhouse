import { Router } from "express";
const router = Router();
import passport from "../utils/passportConfig.js";
import { postSignup } from "../controllers/signupController.js";

router.post("/", passport.authenticate("signup"), postSignup);

export default router;
