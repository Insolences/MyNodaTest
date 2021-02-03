const {checkLength, checkForNumber} = require('./validatorHelpers');


class ProductValidator {

    validProductFields(req, res, next){
        const {name, price, category_id, description} = req.body;
        if (
            checkLength(name, 3, 20) &&
            checkForNumber.test(price) &&
            checkForNumber.test(category_id) &&
            checkLength(description, 3, 20)
        ){
            next()
        }else {
            return res.status(403).json({ message: "Valid error" });
        }
    }
}

module.exports = new ProductValidator()
