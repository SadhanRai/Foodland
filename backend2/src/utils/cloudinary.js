import cloudinary from "../config/cloudinary.js";

export const uploadFromBuffer = (fileBuffer, folderName) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: folderName },
      (error, result) => {
        if (result) resolve(result.secure_url);
        else reject(error);
      }
    );

    // Write the buffer to the stream and end it
    uploadStream.end(fileBuffer);
  });
};
