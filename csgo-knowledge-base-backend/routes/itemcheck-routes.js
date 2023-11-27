const express = require("express");
const router = express.Router();
const itemCheckController = require("../controllers/itemcheck-controller");

// Routes

// Get all item checks
router.get("/", itemCheckController.getAllItemChecks);

// Get a specific item check by ID
router.get("/:id", itemCheckController.getItemCheckById);

// Add a new item check
router.post("/", itemCheckController.addItemCheck);

router.post("/check", itemCheckController.checkItem);
module.exports = router;
