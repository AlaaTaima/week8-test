const express = require("express");

const { signupNewUser } = require("./signupuser");
const { loginUser } = require("./loginuser");

const error = require("./error");
const city = require("./city");
const signup = require("./signup");
const login = require("./login");
const { logoutUser } = require("./logout");

const router = express.Router();

router.get("/login", login.renderLogin);
router.get("/signup", signup.renderSignup);

router.post("/signup", signupNewUser);
router.post("/login", loginUser);

router.get("/logout", logoutUser);

router.get("/cities", city.renderCities);
router.get("/all-cities", city.getAllCities);
router.post("/add-city", city.add);

router.use(error.client);
router.use(error.server);

module.exports = router;
