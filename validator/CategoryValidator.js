const {checkLength} = require('./validatorHelpers');

class CategoryValidator {
  validCategoryName(req, res, next){
    const {name} = req.body;
    if (checkLength(name, 3, 20)){
      next()
    }else {
      return res.status(403).json({ message: "Length 3-20 symbol" });
    }
  }
}

module.exports = new CategoryValidator()
