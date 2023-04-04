const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.post("/", usersController.create);
router.post("/login", usersController.login);

router.put("/:id", usersController.update);

router.get("/", usersController.index);

router.delete("/:id", usersController.delete);

router.get("/:id", usersController.show);

module.exports = router;
