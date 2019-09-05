const { signupUser } = require("../database/queries/addUser");
require("env2")("./secret.env");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secret = process.env.SECRET_KEY;

const signupNewUser =  (req, res, next) => {
    const { password, email } = req.body;
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      signupUser(email, hashedPassword)
        .then(result => result.rows[0])
        .then(result => {
          const accessToken = jwt.sign({ id: result.id }, secret);
          res.cookie("access", accessToken);
          res.redirect("/cities");
        })
        .catch(err => next(err));
    });
  };

  module.exports = {signupNewUser};