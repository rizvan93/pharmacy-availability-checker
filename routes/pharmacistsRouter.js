const express = require("express");
const router = express.Router();
const pharmacistController = require("../controllers/pharmacistController");
// const storesController = require("../controllers/storesController");

router.get("/seed", pharmacistController.seed);

//Pharma check-in by ID
router.get("/:id", pharmacistController.show); //controller name should be show
//router.put("/:id, pharmacistController.update) -> add route for edit: edit pharmacist's name and default store

module.exports = router;
