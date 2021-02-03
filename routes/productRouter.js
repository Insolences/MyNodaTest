const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');
const authMiddleware = require('../validator/isLoggedInValidator');
const isAdminValidator = require('../validator/isAdminValidator');
const productValidator = require('../validator/ProductValidator');

//localhost:5000/products

router.get("/", controller.getProductList);
router.post("/add",authMiddleware, isAdminValidator, productValidator.validProductFields, controller.addProduct);
router.put("/edit",authMiddleware, isAdminValidator, productValidator.validProductFields, controller.editProduct);
router.delete("/delete",authMiddleware, isAdminValidator, controller.deleteProduct);

module.exports = router;
