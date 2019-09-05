// Write a query to add the user and their password to the database
const connection = require('../config/connection');

const signupUser = (email, hashedPassword) => {
  const sql = {
    text:
      'insert into users (email,password) values ($1,$2) returning *;',
    values: [
      email,
      hashedPassword
    ],
  };
  return connection.query(sql);
};
module.exports = { signupUser };