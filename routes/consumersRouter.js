const express = require("express");
const router = express.Router();
const consumersController = require("../controllers/consumersController");

router.get("/seed", consumersController.seed);
// router.get("/", consumersController.show);

router.post("/", consumersController.create);

router.put("/:id/bookmark", consumersController.updateBookmarkedMedicines);
router.put("/:id/bookmark", consumersController.updateBookmarkedPharmacists);
//can merge into one route + controller?
//router.put("/:id", consumersController.update) -> determine medicine vs parmacist by the body details

module.exports = router;
