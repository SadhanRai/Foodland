import express from "express";
const router = express.Router();
import { getAllPosts, createPost } from "../controllers/postController.js";
import {upload } from "../middleware/upload.js";

router.get("/", getAllPosts);
router.post(
  "/create",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "video", maxCount: 1 },
  ]),
  createPost,
);

export default router;
