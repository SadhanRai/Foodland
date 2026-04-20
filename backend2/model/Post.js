import mongoose from "mongoose";
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    author: {
      type: String,
    },
    categories: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    videoUrl: {
      type: String,
    },
  },
  { timestamps: true },
);

const Post = mongoose.model("Post", postSchema);

export default Post;
