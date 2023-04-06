const express = require("express");
const router = express.Router();
const medicinesController = require("../controllers/medicinesController");
const { isAuth } = require("../controllers/auth");

// router.get("/seed", medicinesController.seed);

router.get("/", medicinesController.index);
router.get("/:id", medicinesController.show);
router.post("/", isAuth(["Admin"]), medicinesController.create);
router.delete("/:id", isAuth(["Admin"]), medicinesController.delete);
router.put("/:id", isAuth(["Admin"]), medicinesController.update);

module.exports = router;
