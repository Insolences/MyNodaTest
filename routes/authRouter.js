const express = require("express");
const router = express.Router();
const controller = require("../controllers/authController");
const registerValidator = require("../validator/RegisterValidator");

//localhost:5000/auth

router.post(
  "/registration",
  (req, res, next) => registerValidator.validRegister(req, res, next),
  controller.registration
);
router.post("/login", controller.login);

module.exports = router;
