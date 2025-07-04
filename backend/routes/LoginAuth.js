const router = require("express").Router();
const { Login } = require("../controllers/LoginAuthController");

router.post("/login", Login);
module.exports = router;
