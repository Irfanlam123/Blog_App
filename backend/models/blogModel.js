const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  id: { 
    type: String, 
    required: true, 
    unique: true // Prevent duplicate IDs
  },
  title: { 
    type: String, 
    required: true,
    trim: true
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

module.exports = mongoose.model("Blog", blogSchema);
