const express = require("express");
const router = express.Router();
const storesController = require("../controllers/storesController");

router.get("/seed", storesController.seed);

router.post("/", storesController.create);
router.get("/:id", storesController.show);
router.get("/", storesController.index);
router.delete("/:id", storesController.delete);
router.put("/:id", storesController.update);

// Get all stores
router.get("/all", storesController.allStores);
// Check-in the pharmacist into selected store
router.put("/checkin/:id", storesController.checkIn);

// Show currently checked-in store
router.get(":id/checked-in", storesController.showCheckedInStore);
// Checkout the pharmacist from the store
router.put("/:id/checkout", storesController.checkoutPharmacist);

module.exports = router;
