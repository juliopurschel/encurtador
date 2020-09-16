const mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "database"
  });

var sql ="CREATE TABLE IF NOT EXISTS historico(id INT AUTO_INCREMENT PRIMARY KEY, url VARCHAR(255), urlConvertida VARCHAR(255), usuarioID INT, FOREIGN KEY (usuarioID) REFERENCES usuario(id))";

con.query(sql, function(err, result ){
    if(err) throw err ;
    console.log('histórico');
});