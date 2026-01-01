import express from "express";

import {
  CreateSlide,
  getAllSlide,
  DeleteSlide,
  getActiveSlide,
  updateSlide,
} from "../controllers/slideController.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

router.get("/admin", getAllSlide);
router.get("/", getActiveSlide);

router.post(
  "/",
  upload.fields([
    { name: "image", maxCount: 1 }, //varibale name from postma// variable name in client
    { name: "authorImage", maxCount: 1 },
  ]),
  CreateSlide
);

router.delete("/:id", DeleteSlide);

//Multiple single file fields
router.put(
  "/admin/:id",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "authorImage", maxCount: 1 },
  ]),
  updateSlide
);

// router.get("/", (req, res) => {
//     res.status(200).send("geting slide data");
// });

export default router;
