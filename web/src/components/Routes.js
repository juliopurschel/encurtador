import React from 'react'
import { Router, Switch } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom';


import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import Home from '../pages/home/Home'
import Historic from '../pages/historic/Historic'

import PrivateRoute from './PrivateRoute'

import history from '../history'
import NotFound from './NotFound';

const NoMatch = ({ location }) => (
    <h3>Página <code>{location.pathname}</code> Não Encontrada</h3>
)

const Routes = () => (
    <BrowserRouter history={history}  >
        <Switch>
            <Route component={Login} exact path="/" />
            <Route component={Register} exact path="/register" />
            <PrivateRoute component={Home} exact path="/home" />
            <PrivateRoute component={Historic} exact path="/historic" />
            <Route component={NoMatch} />
        </Switch>
    </BrowserRouter>
)

export default Routes;