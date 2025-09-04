const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  id: { type: String, required: true },        // UUID ya custom ID
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  date: { type: String, required: true },
  readTime: { type: String, required: true },
  image: { type: String, required: true },
  content: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Blog", blogSchema);
