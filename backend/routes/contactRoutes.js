const express = require("express");
const router = express.Router();

const { createContact } = require("../controllers/contactController.js");

// Routes
router.post("/", createContact);

// Export
module.exports = router;
