import express from "express";
import { getAllMenu } from "../controllers/menuControlle.js";
import { createMenu } from "../controllers/menuControlle.js";
import { updateMenu } from "../controllers/menuControlle.js";
import { deleteMenu } from "../controllers/menuControlle.js";
import { getMenuById } from "../controllers/menuControlle.js";
const router = express.Router();

router.get("/", getAllMenu);
router.get("/:id", getMenuById);
router.post("/", createMenu);
router.put("/:id", updateMenu);
router.delete("/:id", deleteMenu);

// router.get("/", (req, res) => {
//   res.status(200).send("we got the menu details successfully");
// });

// router.post("/", (req, res) => {
//   res.status(200).send("we Create the menu details successfully");
// });
// router.delete("/", (req, res) => {
//   res.status(200).send("we delete the menu details successfully");
// });

export default router;
