const express = require("express");
const router = express.Router();
const pharmacistsController = require("../controllers/pharmacistsController");

router.post("/:id/checkin", pharmacistsController.checkIn);
router.post("/:id/checkout", pharmacistsController.checkOut);

module.exports = router;
