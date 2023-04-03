const express = require("express");
const router = express.Router();
const pharmacistController = require("../controllers/pharmacistController");

router.get("/seed", pharmacistController.seed);

//Pharma check-in by ID
router.get("/:id", pharmacistController.Index);




module.exports = router;
