const express = require('express');
const router = express.Router();
const { getBlogs, getBlogById, createBlog } = require('../controllers/blogController');

// Correct routes - remove '/blogs' prefix since it's already handled in server.js
router.get('/', getBlogs);          // GET /api/blogs
router.get('/:id', getBlogById);    // GET /api/blogs/:id
router.post('/', createBlog);       // POST /api/blogs

module.exports = router;