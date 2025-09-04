const Blog = require("../models/blogModel.js");

// Get all blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    return res.status(200).json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return res.status(500).json({ error: "Server error while fetching blogs" });
  }
};

// Get single blog by custom id
const getBlogById = async (req, res) => {
  try {
    const blogId = req.params.id;
    if (!blogId) return res.status(400).json({ error: "Blog ID is required" });

    const blog = await Blog.findOne({ id: blogId }); // custom id instead of _id
    if (!blog) return res.status(404).json({ error: "Blog not found" });

    return res.status(200).json(blog);
  } catch (error) {
    console.error("Error fetching blog by ID:", error);
    return res.status(500).json({ error: "Server error while fetching the blog" });
  }
};

// Create a new blog
const createBlog = async (req, res) => {
  try {
    const { id, title, excerpt, date, readTime, image, content } = req.body;

    // Simple validation
    if (!id || !title || !excerpt || !date || !readTime || !image || !content) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const blog = await Blog.create({ id, title, excerpt, date, readTime, image, content });
    return res.status(201).json(blog);
  } catch (error) {
    console.error("Error creating blog:", error);
    return res.status(500).json({ error: "Server error while creating blog" });
  }
};

// Export
module.exports = { getBlogs, getBlogById, createBlog };
