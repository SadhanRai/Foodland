import Post from "../models/Post.js";

export const getAllPost = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Error fetching posts", error });
  }
};

export const createPost = async (req, res) => {
  try {
    const { header, education, workExperience, skills } = req.body;
    const newPost = new Post({ header, education, workExperience, skills });
    await newPost.save();
    res
      .status(201)
      .json({ message: "Post Created Successfully", post: newPost });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Error creating post", error });
  }
};
