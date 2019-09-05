const { Pool } = require('pg');

require('env2')('./config.env');

let DB_URL = '';

if (process.env.NODE_ENV === 'development') {
  DB_URL = process.env.DB_URL;
} else {
  DB_URL = process.env.DATABASE_URL;
}


const options = {
  connectionString: DB_URL,
  ssl: true
};

if (!DB_URL) throw new Error('Database URL Not Found!!');

module.exports = new Pool(options);