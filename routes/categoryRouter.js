const express = require("express");
const router = express.Router();
const controller = require("../controllers/categoryController");
const isAdminValidator = require("../validator/isAdminValidator");

//localhost:5000/category

router.get("/", controller.getCategoryList);
router.post("/add", isAdminValidator, controller.addProductCategories);
router.put("/edit", isAdminValidator, controller.editProductCategories);
router.delete(
  "/delete",
    isAdminValidator,
  controller.deleteProductCategories
);

module.exports = router;
