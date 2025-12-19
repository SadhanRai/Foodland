import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// ✅ Fix CORS syntax and apply before routes
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Routes
app.use("/api/notes", notesRoutes);
app.use("/api/posts", postRoutes);

// Optional test routes (uncomment if needed)
// app.get("/api/notes", (req, res) => {
//   res.send("Hello from Express");
// });
// app.post("/api/notes", (req, res) => {
//   res.status(201).json({ message: "Post Created Successfully" });
// });

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
 