let mysql = require('mysql')
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'restrant',
  port: 3306
})

connection.query('SELECT * FROM test', function (err, rows) {
  if (err) {
    // error
  } else {
    for (let row in rows) {
      console.log(row)
    }
  }
})

module.exports = connection
