const express = require('express');
const router = express.Router();
const controller = require('../controllers/orderController');
const authMiddleware = require('../validator/isLoggedInValidator');

//localhost:5000/order

router.get("/", authMiddleware, controller.getOrderList);
router.post("/add", authMiddleware, controller.addOrder);

module.exports = router;
