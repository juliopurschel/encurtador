const express = require('express');

const routes = express.Router();

const UserController = require('./controllers/UserControllers');
const UrlController = require('./controllers/UrlControllers');

routes.get('/users', UserController.index );
routes.get('/users/:id', UserController.show );
routes.post('/users', UserController.store );
routes.put('/users/:id', UserController.update );
routes.delete('/users/:id', UserController.destroy );




routes.get('/urls', UrlController.index ); 
routes.get('/urls/:id', UrlController.show ); 
routes.post('/urls', UrlController.store ); 

module.exports = routes;
