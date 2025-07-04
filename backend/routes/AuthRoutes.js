const { Signup } = require("../controllers/AuthController");
const router = require("express").Router();
const { verifyUser } = require("../controllers/AuthController");

router.post("/verifyUser", verifyUser);
router.post("/signup", Signup);

module.exports = router;