const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.post("/", usersController.create);

router.put("/:id", usersController.update);

router.get("/", usersController.index);

router.delete("/:id", usersController.delete);

module.exports = router;
