const db = require("../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const { secret } = require("../config/config");
const authService = require("../service/AuthService");

const generateAccessToken = (id, isAdmin) => {
  const payload = {
    id,
    isAdmin,
  };
  return jwt.sign(payload, secret, { expiresIn: "24h" });
};

class AuthController {
  async registration(req, res) {
    const { password } = req.body;
    const hash = bcrypt.hashSync(password, saltRounds);

    try {
      const user = await authService.createUser({
        ...req.body,
        hash,
        user_group_id: 1,
        admin: 0,
      });
      res.send({ registration: "Registration complete", login: user.email });
    } catch (e) {
      console.log(e);
      res.status(401).send(e);
    }
  }
  async login(req, res) {
    const { email, password } = req.body;

    try {
      db.users.findOne({ where: { email: email } }).then((user) => {
        if (!user) {
          return res
            .status(403)
            .json({ message: `Пользователь ${user} не найден` });
        }
        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) {
          return res.status(403).json({ message: `Введен неверный пароль` });
        }
        const token = generateAccessToken(user.id, user.admin);
        res.send({ login: "login success", token: token });
      });
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new AuthController();
