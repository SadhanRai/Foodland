import multer from "multer";

const storage = multer.memoryStorage(); //store file in Ram // can be use as req.file 

export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Optional: Limit to 5MB to protect RAM  }
});
