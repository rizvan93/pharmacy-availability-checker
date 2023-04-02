const express = require("express");
const router = express.Router();
const storesController = require("../controllers/storesController");

router.get("/seed", storesController.seed);

router.post("/", storesController.create);
router.get("/:id/checkedIn", storesController.showCheckedInStore); // Currently checkedIn store
router.get("/:id", storesController.show);
router.get("/", storesController.index);
router.delete("/:id", storesController.delete);
router.put("/:id", storesController.update);

// Get all stores
router.get("/all", storesController.allStores);
// Check-in the pharmacist into selected store
router.put("/pharmacists/:id/checkin", storesController.checkIn);

// Checkout the pharmacist from the store
router.put("/:id/checkout", storesController.checkoutPharmacist);

module.exports = router;
