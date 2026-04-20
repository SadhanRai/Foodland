import cloudinary from "../config/cloudinary.js";

export const uploadFromBuffer = (
  fileBuffer,
  folderName,
  resourceType = "image"
) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: folderName,
        resource_type: resourceType,
      },
      (error, result) => {
        if (result) resolve(result.secure_url);
        else reject(error);
      }
    );

    uploadStream.end(fileBuffer);
  });
};