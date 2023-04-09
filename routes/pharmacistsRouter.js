const express = require("express");
const router = express.Router();
const pharmacistsController = require("../controllers/pharmacistsController");
const { isAuth } = require("../controllers/auth");
// router.get("/seed", pharmacistController.seed);
//Pharma check-in by ID
router.get("/:id", pharmacistsController.show);
router.put("/:id", isAuth(["Pharmacist"]), pharmacistsController.update);
router.put(
  "/:id/checkout",
  isAuth(["Pharmacist"]),
  pharmacistsController.checkoutPharmacist
);
module.exports = router;
