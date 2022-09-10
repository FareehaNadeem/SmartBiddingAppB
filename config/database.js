const { createPool} = require("mysql");

const pool = createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"smartbiddingapp",
    connectionLimit: 10
});

module.exports = pool;