const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const authMiddleware = require('../validator/isLoggedInValidator');

//localhost:5000/user/me

router.get("/me", authMiddleware, controller.getProfile);
module.exports = router;
