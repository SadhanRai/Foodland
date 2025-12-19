import mongoose from "mongoose";

const menuSchema = new mongoose.Schema(
  {
    brandName: {
      type: String,
      // required: true,
    },
    items: [
      {
        label: {
          type: String,
          // required: true,
        },
        href: {
          type: String,
          // required: true,
        },
      },
    ],

    socials: [
      {
        icon: { type: String },
        href: { type: String },
      },
    ],
  },

  { timestamps: true }
);

const Menu = mongoose.model("Menus", menuSchema);

export default Menu;
