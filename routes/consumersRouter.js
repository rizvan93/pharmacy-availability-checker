const express = require("express");
const router = express.Router();
const consumersController = require("../controllers/consumersController");

router.get("/seed", consumersController.seed);
// router.get("/", consumersController.show);
router.post("/", consumersController.create);
router.put("/:id/bookmark", consumersController.updateBookmarkedMedicines);
router.put("/:id/bookmark", consumersController.updateBookmarkedPharmacists);

module.exports = router;
