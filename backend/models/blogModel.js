const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  id: { 
    type: String, 
    required: true, 
    unique: true // Add unique constraint to prevent duplicate IDs
  },
  title: { 
    type: String, 
    required: true,
    trim: true // Remove extra spaces
  },
  excerpt: { 
    type: String, 
    required: true,
    trim: true
  },
  date: { 
    type: String, 
    required: true 
  },
  readTime: { 
    type: String, 
    required: true 
  },
  image: { 
    type: String, 
    required: true 
  },
  content: { 
    type: String, 
    required: true 
  },
}, { timestamps: true });

// Add index on id field for faster queries
blogSchema.index({ id: 1 });

module.exports = mongoose.model("Blog", blogSchema);