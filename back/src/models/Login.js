const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "database"
  });

var sql ="CREATE TABLE IF NOT EXISTS usuario(id INT AUTO_INCREMENT PRIMARY KEY, login VARCHAR(255), senha VARCHAR(255))";

con.query(sql, function(err, result ){
    if(err) throw err ;
    console.log('Usuario');
});