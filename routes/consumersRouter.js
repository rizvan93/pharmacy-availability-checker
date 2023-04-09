const express = require("express");
const router = express.Router();
const consumersController = require("../controllers/consumersController");
const { isAuth, isUser } = require("../controllers/auth");

router.get("/:id", isAuth(["Consumer"]), isUser, consumersController.show);
router.post("/", consumersController.create);
router.put("/:id", isAuth(["Consumer"]), isUser, consumersController.update);

module.exports = router;
