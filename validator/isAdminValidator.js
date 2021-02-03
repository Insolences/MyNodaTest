const jwt = require("jsonwebtoken");
const { secret } = require("../config/config");

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    const token = req.headers.authorization;
    const { isAdmin: isAdmin } = jwt.verify(token, secret);
    if (!isAdmin) {
      return res.status(403).json({ message: "У вас нет доступа" });
    }
    next();
  } catch (e) {
    console.log(e);
    return res.status(403).json({ message: "Пользователь не авторизован" });
  }
};
