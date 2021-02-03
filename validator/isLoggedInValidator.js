const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(403).json({ message: "Пользователь не авторизован" });
    }
    const decodedToken = jwt.verify(token, process.env.SECRET);

    req.user = decodedToken;

    next();
  } catch (e) {
    res.status(401).send(e);
    console.log(e);
  }
};
