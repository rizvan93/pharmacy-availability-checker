const express = require("express");
const router = express.Router();
const pharmacistsController = require("../controllers/pharmacistsController");

router.get("/seed", pharmacistsController.seed);

router.put("/:id", pharmacistsController.edit);

module.exports = router;
