const express = require('express');
const router = express.Router();
const { getBlogs, getBlogById, createBlog } = require('../controllers/blogController');

// Routes
router.get('/', getBlogs);          // GET /api/blogs
router.get('/:id', getBlogById);    // GET /api/blogs/:id
router.post('/', createBlog);       // POST /api/blogs

module.exports = router;
