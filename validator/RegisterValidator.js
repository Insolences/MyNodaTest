const checkLength = (str, min, max) => str.length > min && str.length < max;
const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class RegisterValidator {
  validRegister(req, res, next) {
    const { first_name, last_name, email, password } = req.body;
    console.log(first_name, last_name, email, password);
    console.log(this);
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
