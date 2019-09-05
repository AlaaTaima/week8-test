const { usersData } = require("../database/queries/getUser");
require("env2")("./secret.env");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secret = process.env.SECRET_KEY;

const loginUser = (req, res, next) => {
  const { email, password } = req.body;
  usersData(email)
    .then(result => {
      if (result.rows.length === 0) res.send(("you aren't signed up"));
      const hashedPassword = result.rows[0].password;
      bcrypt.compare(password, hashedPassword, (err, value) => {
        if (value) {
          const accessToken = jwt.sign({ id: result.rows[0].id }, secret);
          res.cookie("access", accessToken);
          res.redirect("/cities");
        } else {
          res.send(("Wrong Password"));
        }
      });
    })
    .catch(err => next(err));
}

module.exports = {loginUser};