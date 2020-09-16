const express = require('express');
const routes = express.Router();


//quando usuário acessar a rota
//req é a requisição feita ao servidor como params
//res é a resposta da requisção
routes.get('/', (req, res ) => {
   
return res.send('Ola mundao')
})

module.exports = routes;