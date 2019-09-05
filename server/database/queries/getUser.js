// Write a query to get the user and their password from the database
const connection = require('../config/connection');

const usersData = (email) => connection.query('select id, email, password from  users where users.email = $1', [email]);

module.exports = {
  usersData,
};