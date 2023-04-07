const express = require("express");
const router = express.Router();
const storesController = require("../controllers/storesController");
const { isAuth } = require("../controllers/auth");

router.get("/seed", storesController.seed);
router.post("/", isAuth(["Admin"]), storesController.create);
router.get(
  "/:id/checkedIn",
  isAuth(["Pharmacist"]),
  storesController.showCheckedInStore
);
router.get("/availability", storesController.queryAvailability);
router.get("/:id", storesController.show);
router.get("/", isAuth(["Admin", "Pharmacist"]), storesController.index);
router.delete("/:id", isAuth(["Admin"]), storesController.delete);
router.put("/:id", isAuth(["Admin"]), storesController.update);
router.put(
  "/:storeId/pharmacists/:id/checkin", // isAuth(["Pharmacist"]),
  storesController.checkIn
);
module.exports = router;
