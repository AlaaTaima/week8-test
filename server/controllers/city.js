const { addCity } = require("../database/queries/addCity");
const { renderCities, getAllCities } = require("./auth");

exports.renderCities = renderCities;

exports.getAllCities = getAllCities;

exports.add = (req, res, next) => {
  const cityInfo = req.body;
  addCity(cityInfo)
    .then(r => res.redirect("/cities"))
    .catch(err => next(err));
};
