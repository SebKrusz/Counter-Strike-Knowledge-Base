// urlcheck-routes.js

const express = require("express");
const router = express.Router();
const urlCheckController = require("../controllers/urlcheck-controller");

// Routes

// Get all URL checks
router.post("/checkurls", urlCheckController.checkUrls);
// Get a specific URL check by ID
router.get("/:id", urlCheckController.getUrlCheckById);

// Add a new URL check
router.post("/", urlCheckController.addUrlCheck);

module.exports = router;
