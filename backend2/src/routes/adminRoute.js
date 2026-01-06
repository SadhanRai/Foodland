import express from "express";
import {
  getRegister,
  Login,
  Register,
} from "../controllers/adminController.js";
import {
  loginValidation,
  signupValidation,
} from "../middleware/AuthValidation.js";

const router = express.Router();

router.get("/signup", getRegister);
router.post("/signup", signupValidation, Register);
router.post("/login", loginValidation, Login);

export default router;
