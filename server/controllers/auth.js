
const { join } = require('path');
const jwt = require('jsonwebtoken');

require('env2')('./secret.env');
const secret = process.env.SECRET_KEY;

const { getCities } = require('../database/queries/getCities');


const renderCities =  (req, res) => {
    if (req.cookies.access) {
      jwt.verify(req.cookies.access, secret, (error, value) => {
        if (value) {
          res.sendFile(join(__dirname, '..', '..', 'public', 'cities.html'));
        } else {
          res.redirect('/');
        }
      });
    }else {
      res.redirect('/');
    }
  };

  const getAllCities =  (req, res, next) => {
    getCities()
      .then(result => {
        if (req.cookies.access) {
          jwt.verify(req.cookies.access, secret, (error, value) => {
            if (value) {
              res.json(result.rows);
            } else {
              res.redirect('/');
            }
          });
        } else {res.redirect('/')}
  
      })
      .catch(err => next(err));
  };

  module.exports = {
    renderCities,
    getAllCities
  }