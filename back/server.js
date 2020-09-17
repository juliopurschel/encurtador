const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//iniciando app
const app = express();
app.use(cors());
app.use(express.json());

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true, useUnifiedTopology: true })

requireDir('./src/models/');


//primeira rota
app.use('/api', require('./src/routes'));


app.listen(3001);