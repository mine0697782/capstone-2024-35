const express = require("express");
const router = express.Router();

const { login, register, dashboard, getAllUsers } = require("../controllers/loginController");
const authMiddleware = require('../miidleware/auth')

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/dashboard").get(authMiddleware, dashboard);
router.route("/users").get(getAllUsers);


module.exports = router;