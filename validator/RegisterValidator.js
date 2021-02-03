const {checkLength, emailReg} = require('./validatorHelpers');

class RegisterValidator {
  validRegister(req, res, next) {
    const { first_name, last_name, email, password } = req.body;
    if (
      checkLength(first_name, 2, 15) &&
      checkLength(last_name, 2, 15) &&
      checkLength(password, 2, 15) &&
      checkLength(email, 3, 25) &&
      emailReg.test(email)
    ) {
      next();
    } else {
      res.status(401).send("Invalid params");
    }
  }
}

module.exports = new RegisterValidator();
