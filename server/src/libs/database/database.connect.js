const mysql = require('mysql2');
const dbConfig = require('../../configs/dbConfigs')
const connection = mysql.createConnection({
  host: dbConfig.db.host,
  user: dbConfig.db.user,
  password: dbConfig.db.password,
  database: dbConfig.db.database
})

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connect ok")
})

module.exports = connection;