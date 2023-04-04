const express = require("express");
const router = express.Router();
const pharmacistController = require("../controllers/pharmacistController");
const { isAuth, isUser } = require("../controllers/auth");

// router.get("/seed", pharmacistController.seed);

//Pharma check-in by ID
router.get("/:id", isAuth(["Pharmacist"]), isUser, pharmacistController.show);
router.put("/:id", isAuth(["Pharmacist"]), isUser, pharmacistController.update);

module.exports = router;
