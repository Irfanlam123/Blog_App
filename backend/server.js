// backend/server.js

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db.js");

// Load environment variables from .env
dotenv.config();

// Connect to MongoDB Atlas
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes.js");
const blogRoutes = require("./routes/blogRoutes.js");
const contactRoutes = require("./routes/contactRoutes.js");

app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/contact", contactRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({ 
    success: true, 
    message: "Server is running successfully" 
  });
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "Endpoint not found"
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
