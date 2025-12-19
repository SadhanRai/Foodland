import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGO DB CONNECTED SUCCESSFULLY");
  } catch (error) {
    console.log("Error in DB connection", error);
    process.exit(1); //exit with failure
  }
};
