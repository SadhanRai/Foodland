import express from "express";
import { ensuereAuthenctication } from "../middleware/Auth.js";
const router = express.Router();

router.get("/products", ensuereAuthenctication, (req, res) => {
  console.log("---------------------logged in user detail----", req.user);
  res.status(200).json([
    {
      name: "mobile",
      price: 1000,
    },
    {
      name: "tv",
      price: 3000,
    },
  ]);
});

export default router;
