const express = require("express");
const router = express.Router();
const medicinesController = require("../controllers/medicinesController");

router.get("/seed", medicinesController.seed);

router.get("/", medicinesController.index);
router.post("/", medicinesController.create);
router.get("/:id", medicinesController.show);
router.delete("/:id", medicinesController.delete);
router.put("/:id", medicinesController.update);

module.exports = router;
