const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const { isAuth } = require("../controllers/auth");

router.get("/seed", usersController.seed);

router.post("/", isAuth(["Admin"]), usersController.create);
router.post("/login", usersController.login);
router.put("/:id", isAuth(["Admin"]), usersController.update);
router.get("/", isAuth(["Admin"]), usersController.index);
router.delete("/:id", isAuth(["Admin"]), usersController.delete);
router.get("/:id", isAuth(["Admin"]), usersController.show);

module.exports = router;
