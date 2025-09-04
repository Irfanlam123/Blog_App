const express = require("express");
const router = express.Router();

const { getBlogs, getBlogById, createBlog } = require("../controllers/blogController.js");

// Routes
router.get("/", getBlogs);
router.get("/:id", getBlogById);
router.post("/", createBlog);

// Export
module.exports = router;
