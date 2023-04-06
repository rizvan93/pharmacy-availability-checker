const express = require("express");
const router = express.Router();
const pharmacistController = require("../controllers/pharmacistsController");
const { isAuth } = require("../controllers/auth");

// router.get("/seed", pharmacistController.seed);

//Pharma check-in by ID
router.get("/:id", isAuth(["Pharmacist"]), pharmacistController.show);
router.put("/:id", isAuth(["Pharmacist"]), pharmacistController.update);

module.exports = router;
