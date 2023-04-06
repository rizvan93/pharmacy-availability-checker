const express = require("express");
const router = express.Router();
const consumersController = require("../controllers/consumersController");
const { isAuth, isUser } = require("../controllers/auth");

// const isAuth = authController.isAuth;
// const isUser = authController.isUser;

// router.get("/seed", consumersController.seed);
<<<<<<< HEAD
// router.get("/", consumersController.show);
router.get("/:id", consumersController.show);
=======

router.get("/:id", isAuth(["Consumer"]), isUser, consumersController.show);
>>>>>>> main
router.post("/", consumersController.create);
router.put("/:id", isAuth(["Consumer"]), isUser, consumersController.update);

module.exports = router;
