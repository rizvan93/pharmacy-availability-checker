const express = require("express");
const router = express.Router();
const storesController = require("../controllers/storesController");
const { isAuth } = require("../controllers/auth");


// router.get("/seed", storesController.seed);

router.post("/", isAuth(["Admin"]), storesController.create);
router.get(
  "/:id/checkedIn",
  isAuth(["Pharmacist"]),
  storesController.showCheckedInStore
); //change id to pharmacistId
router.get("/:id", storesController.show);
router.get("/", storesController.index);
router.delete("/:id", isAuth(["Admin"]), storesController.delete);
router.put("/:id", isAuth(["Admin"]), storesController.update);

// Check-in the pharmacist into selected store------////
router.put(
  "/:storeId/pharmacists/:id/checkin",
  // isAuth(["Pharmacist"]),
  storesController.checkIn
);
// Checkout the pharmacist from the store
router.put(
  "/pharmacists/:id/checkout",
  isAuth(["Pharmacist"]),
  storesController.checkoutPharmacist
);

//move all the pharmacist find, checkin and checkout to pharmacist router

module.exports = router;
