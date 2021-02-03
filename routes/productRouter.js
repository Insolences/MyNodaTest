const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');
const authMiddleware = require('../validator/isLoggedInValidator');
const isAdminValidator = require('../validator/isAdminValidator');
//localhost:5000/products

router.get("/", controller.getProductList);
router.post("/add",authMiddleware, isAdminValidator, controller.addProduct);
router.put("/edit",authMiddleware, isAdminValidator, controller.editProduct);
router.delete("/delete",authMiddleware, isAdminValidator, controller.deleteProduct);

module.exports = router;
