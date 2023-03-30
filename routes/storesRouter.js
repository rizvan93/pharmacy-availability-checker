const express = require("express");
const router = express.Router();
const storesController = require("../controllers/storesController");

router.get("/seed", storesController.seed);

router.get("/", storesController.index);

module.exports = router;
