import express from "express";
import {
  getRegister,
  Login,
  Register,
  Logout,
  getLoginUser,
  updateUser,
} from "../controllers/adminController.js";
import {
  loginValidation,
  signupValidation,
} from "../middleware/AuthValidation.js";

import { verifyToken } from "../middleware/TokenValidation.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

router.get("/signup", getRegister);
router.post("/signup", signupValidation, Register);
router.post("/login", loginValidation, Login);
router.post("/logout", Logout);
router.get("/me", verifyToken, getLoginUser);
router.patch(
  "/me",
  upload.fields([{ name: "profileImage", maxCount: 1 }]),
  verifyToken,
  updateUser,
);

export default router;
