const express = require("express");
const router = express.Router();
const controller = require("../controllers/categoryController");
const isAdminValidator = require("../validator/isAdminValidator");
const isLoggedInValidator = require("../validator/isLoggedInValidator");
const categoryValidator = require("../validator/CategoryValidator");
//localhost:5000/category

router.get("/", controller.getCategoryList);
router.post(
  "/add",
  isLoggedInValidator,
  isAdminValidator,
  categoryValidator.validCategoryName,
  controller.addProductCategories
);
router.put(
  "/edit",
  isLoggedInValidator,
  isAdminValidator,
  categoryValidator.validCategoryName,
  controller.editProductCategories
);
router.delete(
  "/delete",
  isAdminValidator,

  controller.deleteProductCategories
);

module.exports = router;
