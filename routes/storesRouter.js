const express = require("express");
const router = express.Router();
const storesController = require("../controllers/storesController");

router.get("/seed", storesController.seed);

router.post("/", storesController.create);
router.get("/:id", storesController.show);
router.get("/", storesController.index);
router.delete("/:id", storesController.delete);

module.exports = router;
