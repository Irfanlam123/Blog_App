const Blog = require("../models/blogModel.js");

// Get all blogs (with sorting by date)
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ date: -1, createdAt: -1 }); // Sort by date (newest first)
    return res.status(200).json({
      success: true,
      count: blogs.length,
      data: blogs
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return res.status(500).json({ 
      success: false,
      error: "Server error while fetching blogs" 
    });
  }
};

// Get single blog by custom id
const getBlogById = async (req, res) => {
  try {
    const blogId = req.params.id;
    if (!blogId) {
      return res.status(400).json({ 
        success: false,
        error: "Blog ID is required" 
      });
    }

    const blog = await Blog.findOne({ id: blogId });
    if (!blog) {
      return res.status(404).json({ 
        success: false,
        error: "Blog not found" 
      });
    }

    return res.status(200).json({
      success: true,
      data: blog
    });
  } catch (error) {
    console.error("Error fetching blog by ID:", error);
    return res.status(500).json({ 
      success: false,
      error: "Server error while fetching the blog" 
    });
  }
};

// Create a new blog
const createBlog = async (req, res) => {
  try {
    const { id, title, excerpt, date, readTime, image, content } = req.body;

    // Check if blog with same ID already exists
    const existingBlog = await Blog.findOne({ id });
    if (existingBlog) {
      return res.status(409).json({
        success: false,
        error: "A blog with this ID already exists"
      });
    }

    // Simple validation
    if (!id || !title || !excerpt || !date || !readTime || !image || !content) {
      return res.status(400).json({ 
        success: false,
        error: "All fields are required" 
      });
    }

    const blog = await Blog.create({ 
      id, 
      title: title.trim(), 
      excerpt: excerpt.trim(), 
      date, 
      readTime, 
      image, 
      content 
    });
    
    return res.status(201).json({
      success: true,
      data: blog
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        error: messages
      });
    } else if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        error: "A blog with this ID already exists"
      });
    } else {
      console.error("Error creating blog:", error);
      return res.status(500).json({ 
        success: false,
        error: "Server error while creating blog" 
      });
    }
  }
};

// Export
module.exports = { getBlogs, getBlogById, createBlog };