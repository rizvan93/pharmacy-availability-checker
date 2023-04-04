const express = require("express");
const router = express.Router();
const storesController = require("../controllers/storesController");

router.get("/seed", storesController.seed);

router.post("/", storesController.create);
router.get("/:id/checkedIn", storesController.showCheckedInStore); //change id to pharmacistId
router.get("/:id", storesController.show); //-> remove this (no need to show store)
router.get("/", storesController.index);
router.delete("/:id", storesController.delete);
router.put("/:id", storesController.update);

// Check-in the pharmacist into selected store
router.put("/pharmacists/:id/checkin", storesController.checkIn);
// Checkout the pharmacist from the store
router.put("/pharmacists/:id/checkout", storesController.checkoutPharmacist);

//move all the pharmacist find, checkin and checkout to pharmacist router

module.exports = router;

