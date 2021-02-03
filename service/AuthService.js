const db = require("../models")

class AuthService{
  createUser(userValues) {
    return db.users.create({
      ...userValues,
      password: userValues.hash
    })
  }
}

module.exports = new AuthService()
