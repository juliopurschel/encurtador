const express = require('express');
const mysql = require('mysql');
const requireDir = require('require-dir')
//excuta função do express
const app = express();

//inicando o DB
const dbCon = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "database"
});

dbCon.connect(function(err) {
    if (err) throw err;
    console.log("Connected");
})

requireDir('./src/models');

//quando usuário acessar a rota
//req é a requisição feita ao servidor como params
//res é a resposta da requisção
app.get('/', (req, res ) => {
   

})
//ouvir porta 3001 no navegador
app.listen(3001);