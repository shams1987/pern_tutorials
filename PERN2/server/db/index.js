const { Pool } = require("pg");   // import and destructure

const pool = new Pool();   //create a new pool, this is what will connect to postgres DB
module.exports = {
  query: (text, params) => pool.query(text, params),
};
