const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }

  try {
    const token = req.headers.authorization;
    const { isAdmin } = jwt.verify(token, process.env.SECRET);
    if (!isAdmin) {
      return res.status(403).json({ message: "У вас нет доступа" });
    }
    next();
  } catch (e) {
    console.log(e);
    return res.status(403).json({ message: "Пользователь не авторизован" });
  }
};
