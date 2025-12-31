import mongoose from "mongoose";

const slideSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    category: {
      type: String,
      default: "Hot Recipes",
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },

    link: {
      type: String,
      required: [true, "Recipe link is required"],
    },
    time: {
      type: String, // e.g., "30 M"
      required: true,
    },
    type: {
      type: String, // e.g., "Chicken"
      required: true,
    },
    author: {
      name: { type: String, required: true },
      image: { type: String }, // URL for the author's avatar
    },
    isActive: {
      type: Boolean,
      default: true, // Used for the toggle button in your dashboard
    },
    displayOrder: {
      type: Number,
      default: 0, // Helps you sort which slide appears first
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create the model
const Slide = mongoose.model("Slide", slideSchema);

export default Slide;
