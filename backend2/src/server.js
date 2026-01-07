import dotenv from "dotenv";
dotenv.config();
import express from "express";
import menuRoutes from "./routes/menuRoutes.js";
import slideRoutes from "./routes/slideRoutes.js";
import adminRoute from "./routes/adminRoute.js";
import productRouter from "./routes/productRoutes.js";
import { connectMongoDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";

// const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
// middleware to POST data from body / frontend
app.use(express.json()); // allows req.body

app.use(rateLimiter);
//middleware to log request method and url

app.use((req, res, next) => {
  console.log(`Req method is ${req.method} and Req url is ${req.url}`);
  next();
});

app.use("/api/menu/data", menuRoutes);
app.use("/api/slide/data", slideRoutes);
app.use("/api/admin", adminRoute);
app.use("/api/admin", productRouter);

// app.get("/api/data", (req, res) => {
//   res.send("Hello asdfa from Backenasdfasd2asdasd!");
// });

// app.post("/api/data/menu", (req, res) => {
//   res.send("menu data is posted successfully");
// });

// app.delete("/api/delete/", (req, res) => {
//   res.send("menu data is deleted successfully");
// });

// app.put("/api/data/menu:id", (req, res) => {
//   res.send("menu data is edit update successfully");
// });

connectMongoDB().then(() => {
  app.listen(PORT, () => {
    console.log("Backend2 server is running on http://localhost:4000");
  });
});
