const Pool = require("pg").Pool;

// make and instance of Pool
// and then set up configaration inside
const pool = new Pool({
  user: "postgres",
  password: "kthl8822",
  host: "localhost",
  port: 5432,
  database: "perntodo"
});

module.exports = pool;
