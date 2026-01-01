import express from "express";
import Slide from "../../model/Slide.js";
import { upload } from "../middleware/upload.js";
import { errors } from "@upstash/redis";
import { uploadFromBuffer } from "../utils/cloudinary.js";
import cloudinary from "../config/cloudinary.js";

import fs from "fs";
import path from "path";

//api fro dashboard

export const getAllSlide = async (req, res) => {
  try {
    const slides = await Slide.find().sort({ createdAt: -1 });
    res.status(200).json(slides);
  } catch (error) {
    console.error("error while fetching slides", error);
    res.status(500).json({ message: "error while fetching slide", error });
  }
};
//api for user

export const getActiveSlide = async (req, res) => {
  try {
    const slides = await Slide.find({ isActive: true }).sort({ createdAt: -1 });
    res.status(200).json(slides);
  } catch (error) {
    consle.error("error while fetching Active slide");
    res.status(500).json({
      message: "Active user only cant be fetched error happends",
      error,
    });
  }
};

//---------POST API-------------

// export const CreateSlide = async (req, res) => {
//   try {

//     const files = req.files || {};

//     console.log("what is inside file from multer", req.files.image);
//     // more than 1 image sent
//     if (req.files.image && req.files.image.length > 1) {
//       return res //if return wont pass this will eventually save the data while showing the error message
//         .status(400)
//         .json({ message: "you cant pass more than 1 image at once" });
//     }
//     if (req.files.authorImage && req.files.authorImage.length > 1) {
//       return res //if return wont pass this will eventually save the data while showing the error message
//         .status(400)
//         .json({ message: "you cant pass more than 1 image at once" });
//     }

//     //image details from multer
//     const authorImage = req.files.image ? req.files.image[0].path : null;
//     const slideImage = req.files.authorImage
//       ? req.files.authorImage[0].path
//       : null;

//     const required = {
//       title,
//       description,
//       time,
//       type,
//     };

//     //object into array  ["title", "My Slide"],
//     const missingField = Object.entries(required)
//       .filter(([_, value]) => !value)
//       .map(([key]) => key);
//     if (missingField.length > 0) {
//       return res.status(400).json({
//         message: "missing required fields",
//         missingField,
//       });
//     }

//     // req.files.image[0].buffer is the file sitting in your RAM
//     const slideImageUrl = await uploadFromBuffer(
//       files.image[0].buffer,
//       "slides"
//     );

//     let authorImageUrl = null;
//     if (files.authorImage) {
//       authorImageUrl = await uploadFromBuffer(
//         files.authorImage[0].buffer,
//         "authors"
//       );
//     }

//     const slide = await Slide.create({
//       title,
//       category,
//       description,
//       link: slideImageUrl, // (optional duplicate or remove link from schema)
//       time,
//       type,
//       displayOrder,
//       author: {
//         name: authorName,
//         image: authorImage,
//       },
//       isActive: true,
//     });

//     res.status(201).json({
//       success: true,
//       message: "Slide created successfully",
//       slide,
//     });
//   } catch (error) {
//     console.error("slide create error:", error);
//     res.status(500).json({ message: "Slide creation failed", error });
//   }
// };

// controllers/slideController.js

export const CreateSlide = async (req, res) => {
  try {
    const {
      title,
      category,
      description,
      time,
      type,
      displayOrder,
      authorName,
    } = req.body;
    const files = req.files || {};

    // 1. VALIDATION FIRST (Nothing is in the cloud yet)
    // if (!title || !authorName || !time || !category || !description || !type
    //   || !displayOrder
    //   ||!files.image) {
    //   return res.status(400).json({ message: "Missing required fields" });
    // }

    const required = {
      title,
      type,
      displayOrder,
      authorName,
      image: files.image?.[0],
    };

    const missingField = Object.entries(required)
      .filter(([_, value]) => !value)
      .map(([key]) => key);
    if (missingField.length > 0) {
      return res.status(400).json({
        message: "missing required fields",
        missingField,
      });
    }

    // 2. UPLOAD TO CLOUD ONLY IF VALID
    // req.files.image[0].buffer is the file sitting in your RAM
    const slideImageUrl = await uploadFromBuffer(
      files.image[0].buffer,
      "slides"
    );

    let authorImageUrl = null;
    if (files.authorImage) {
      authorImageUrl = await uploadFromBuffer(
        files.authorImage[0].buffer,
        "authors"
      );
    }

    // 3. SAVE TO DB
    const slide = await Slide.create({
      title,
      type,
      time,
      category,
      description,
      displayOrder,
      author: {
        name: authorName,
        image: authorImageUrl, // REMOVE .secure_url if your helper returns the string
      },
      link: slideImageUrl, // REMOVE .secure_url if your helper returns the string
    });
    res.status(201).json({ success: true, slide });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Upload failed", error: error.message });
  }
};

//-----------------DELTE API------------------------

export const DeleteSlide = async (req, res) => {
  try {
    const { id } = req.params; //param = id sent by user in url
    const slide = await Slide.findById(id);
    if (!slide) return res.status(404).json({ message: "slide not found" });

    //getting img id url cotain both imag url so it will run individually

    // this code can be import
    // const getPublicId = (url) => {
    //   if (!url) return null;
    //   const parts = url.split("/");
    //   const filename = parts[parts.length - 1];
    //   const folder = parts[parts.length - 2];
    //   const name = filename.split(".")[0];

    //   return `${folder}/${name}`;
    // };

    //getting id from getPublicId
    const mainImgId = getPublicId(slide.link);
    const authorImgId = getPublicId(slide.author?.image);

    //delet  image from cloudnary if they exist
    if (mainImgId) await cloudinary.uploader.destroy(mainImgId);
    if (authorImgId) await cloudinary.uploader.destroy(authorImgId);

    // delet the mongoDB documents

    await Slide.findByIdAndDelete(id);

    res.status(200).json({ message: "Slide and Images delted Successfully" });
  } catch (error) {
    console.error("We are having error while deleting this slide", error);

    res.status(500).json({ message: "Delete failed", error });
  }
};

//-----------------------------PUT REQUEST API ----------------
const getPublicId = (url) => {
  if (!url) return null;
  const parts = url.split("/");
  const file = parts.pop();
  const folder = parts.pop();
  return `${folder}/${file.split(".")[0]}`;
};

export const updateSlide = async (req, res) => {
  try {
    const slide = await Slide.findById(req.params.id);
    if (!slide) return res.status(404).json({ message: "Slide not found" });

    const files = req.files || {};

    // ---------- SLIDE IMAGE ----------
    if (files.image?.[0]) {
      const oldId = getPublicId(slide.link);
      if (oldId) await cloudinary.uploader.destroy(oldId);

      const newSlideImg = await uploadFromBuffer(files.image[0].buffer, "slides");
      slide.link = newSlideImg;
    }

    // ---------- AUTHOR IMAGE ----------
    if (files.authorImage?.[0]) {
      const oldAuthId = getPublicId(slide.author?.image);
      if (oldAuthId) await cloudinary.uploader.destroy(oldAuthId);

      const newAuthImg = await uploadFromBuffer(files.authorImage[0].buffer, "authors");
      slide.author.image = newAuthImg;
    }

    // ---------- TEXT FIELDS ----------
    slide.title = req.body.title || slide.title;
    slide.time = req.body.time || slide.time;
    slide.type = req.body.type || slide.type;
    slide.category = req.body.category || slide.category;
    slide.description = req.body.description || slide.description;

    if (req.body.isActive !== undefined) {
      slide.isActive = req.body.isActive === "true" || req.body.isActive === true;
    }

    await slide.save();
    res.json({ message: "Slide updated successfully", slide });

  } catch (error) {
    console.error("Update Error:", error);
    res.status(500).json({ message: "Update failed", error: error.message });
  }
};

