import Post from "../../model/Post.js";
import { uploadFromBuffer } from "../utils/cloudinary.js";
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });

    res.status(200).json({
      posts,
      message: "get all posts api is working",
    });
  } catch (error) {
    console.error({ message: "Failed to fetch posts", error });
    res
      .status(500)
      .json({ message: "Failed to fetch posts", error: error.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const { title, content, author, categories } = req.body;
    const files = req.files || {};

    // if (!title || !content) {
    //   return res.status(400).json({
    //     message: "Title, content, categories, and image are required",
    //   });
    // }

    const multerImage = await uploadFromBuffer(
      files.image[0].buffer,
      "Post Images",
      "image",
    );

    const multerVideo = await uploadFromBuffer(
      files.video[0].buffer,
      "Post Videos",
      "video",
    );

    const newPost = new Post({
      title,
      content,
      author,
      categories,
      imageUrl: multerImage,
      videoUrl: multerVideo,
    });
    await newPost.save();

    res.status(201).json({
      message: "Post created successfully",
    });
  } catch (error) {
    console.error({ message: "Failed to create post", error });

    res
      .status(500)
      .json({ message: "Failed to create post", error: error.message });
  }
};



